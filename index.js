/**
 * Calculate the spread (standard deviation) of edits
 * as a percentage of all edits.
 *
 * @param {Object} editors where key is username and value is number of edits
 * @return {Number} between 0 and 1 where 1 is biased and 0 is not biased
 */
function getBias( editors ) {
  var variance, sd,
    maxSpread = 8,
    avg = 0,
    totalEdits = 0,
    values = [],
    totalDeviationSquared = 0;

  // calculate average
  Object.keys(editors).forEach( function ( user ) {
    var value = editors[user];
    values.push(value);
    totalEdits += value;
  } );

  // when more than 10 editors ignore the extremes in bias calculation
  // top editor for every 10.
  if ( values.length > 10 ) {
    values = values.sort( function ( val, val2 ) {
      return val < val2 ? -1 : 1;
    }).slice( 0, values.length - Math.floor( values.length / 10 ) );
  }

  values.forEach( function ( value ) {
    avg += value;
  } );

  if ( values.length <= 1 ) {
    return 1;
  } else {
    avg = avg / values.length;
    // calculate deviations
    values.forEach( function (val) {
      var deviation = (val - avg);
      totalDeviationSquared += (deviation * deviation);
    } );
    // variance
    variance = totalDeviationSquared / values.length;
    sd = Math.sqrt( variance );
    // if a sd is higher than the maxSpread we will consider it biased
    // otherwise how close is to this upper bound?
    return Math.min( sd, maxSpread ) / maxSpread;
  }
}
/**
 * @param {Date} date to calculate scores for
 * @param {Object} edits information
 * @param {Date|String} edit.start when you began recording edit activity
 * @param {Integer} edit.views how many page views a page got in the last 24 hours
 * @param {Boolean} edit.isNew whether the page is known to be new
 * @param {Integer} edits.edits how many edits a page got (including anonymous and reverts)
 * @param {Integer} edits.anonEdits how many anonymous edits a page got
 * @param {Integer} edits.distribution a mapping of usernames to number of edits they made
 * @param {Integer} edits.numberContributors total number of unique editors
 * @param {Integer} edits.flaggedEdits count of suspicious edits (e.g. editors mentioned local policy violations)
 * @param {Integer} period of time in hours to evaluate
 */
function calculateScore(date, edits, hrs) {
  var start = typeof edits.start === 'string' ? new Date( edits.start ) : edits.start;
  var age = ( date - start ) / 1000 / 60;
  var anonEdits = edits.anonEdits || 0;
  var reverts = edits.reverts || 0;
  var views = edits.views || 0;
  var flagged = edits.flaggedEdits || 0;
  var bytes = edits.bytesChanged;
  var distribution = edits.distribution;
  // Maybe this should
  var numContributors = edits.numberContributors || 1;

  var exponential = Math.pow(0.5, age / ( hrs * 60 ));
  var visitScore = views > 0 ? views : 0;
  var allEdits = edits.edits;
  var namedEdits = allEdits - anonEdits - ( reverts / 2 );
  var editScore = ( ( -4 * flagged ) + namedEdits + ( anonEdits * 0.2 ) );
  var contributionScore = ( numContributors - 3 ) / 2;
  var speed = allEdits / age;

  var namedEditors = 0;
  var anonEditors = 0;
  Object.keys( distribution ).forEach( ( name ) => {
    if ( name.indexOf( ':' ) > -1 || name.indexOf( '.' ) > -1 ) {
      anonEditors++;
    } else {
      namedEditors++;
    }
  })
  var ratioAnonsToNamed = namedEditors === 0 ? 0 : namedEditors / anonEditors;

  if ( namedEditors < 2 ) {
    return -2;
  }

  if ( views > 0 && hrs < 84 ) {
    visitScore = -visitScore;
  }

  if ( reverts > 0 && ratioAnonsToNamed < 0.4 ) {
    return 0;
  // where number of edits bytes changed is low
    // or reverts to edit ratio is high
    // return -1
  } else if ( reverts > 1 && ( reverts / allEdits > 0.46 || bytes && allEdits < 20 && bytes < 1000 ) ) {
    return -1;
  }
  var score = contributionScore * ( visitScore + editScore ) * exponential;
  if ( bytes !== undefined ) {
    var byteScore = bytes / ( edits.edits / numContributors );
    if (byteScore < 0) {
      byteScore = 1;
    } else {
      byteScore /= 10000;
    }
    if ( bytes < 200 && bytes > -200 ) {
      return -1;
    }
    if ( bytes === 0 ) {
      return -1;
    }
  }

  var bias = getBias( distribution );
  if ( edits.isNew ) {
    score *= ( allEdits * 2 ) / ( age / 30 );
    if ( speed > 0.9 && allEdits < 12 ) {
      score = 0;
    }
  } else {
    if (
      age < 20 && ( allEdits < 10 || namedEdits === 0 || ratioAnonsToNamed < 0.35 ) &&
      ( anonEdits > 5 )
    ) {
      score = 0;
    }
  }

  if ( bias > 0 ) {
    score *= ( 1 - bias );
  }

  return score;
}

module.exports = {
  getBias: getBias,
  calculateScore: calculateScore
};