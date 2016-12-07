/**
 * Calculate the spread (standard deviation) of edits
 * as a percentage of all edits.
 *
 * @param {Object} editors where key is username and value is number of edits
 * @return {Number} between 0 and 1 where 1 is biased and 0 is not biased
 */
function getBias( editors ) {
  var variance, sd,
    avg = 0,
    totalEdits = 0,
    values = [],
    totalDeviationSquared = 0;

  // calculate average
  Object.keys(editors).forEach( function ( user ) {
    var value = editors[user];
    values.push(value);
    totalEdits += value;
    avg += values[values.length - 1];
  } );
  if ( values.length === 1 ) {
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
    return sd / totalEdits;
  }
}
/**
 * @param {Date} date to calculate scores for
 * @param {Object} edits information
 * @param {Date|String} edit.start when you began recording edit activity
 * @param {Integer} edit.views how many page views a page got in the last 24 hours
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
  // Maybe this should
  var numContributors = edits.numberContributors || 1;

  var exponential = Math.pow(0.5, age / ( hrs * 60 ));
  var visitScore = views > 0 ? views : 0;
  var namedEdits = edits.edits - anonEdits - ( reverts / 2 );
  var editScore = ( ( -4 * flagged ) + namedEdits + ( anonEdits * 0.2 ) );
  var contributionScore = ( numContributors / 2 );

  if ( views > 0 && hrs < 84 ) {
    visitScore = -visitScore;
  }

  var score = contributionScore * ( visitScore + editScore ) * exponential;
  if ( bytes !== undefined ) {
    var byteScore = bytes / ( edits.edits / numContributors );
    if (bytes && byteScore < 0) {
      byteScore = -byteScore;
    }
    score *= byteScore;
    if ( bytes === 0 ) {
      return -1;
    }
  }

  var bias = getBias(edits.distribution);
  if ( bias > 0 ) {
    score *= ( 1 - bias );
  }

  return score;
}

module.exports = {
  getBias: getBias,
  calculateScore: calculateScore
};