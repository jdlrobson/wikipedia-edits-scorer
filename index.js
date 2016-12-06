/**
 * Calculate the spread (standard deviation) of edits
 * as a percentage of all edits.
 *
 * @param {Object} editors where key is username and value is number of edits
 * @return {Number} between 0 and 1 where 1 is biased and 0 is not biased
 */
function getBias( editors ) {
  var variance,
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
    return variance > totalEdits ? 1 : variance / totalEdits;
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
  var start = typeof edits.start === 'string' ? new Date( edits.start ) : start;
  var age = ( date - start ) / 1000 / 60;

  var exponential = Math.pow(0.5, age / ( hrs * 60 ));
  var visitScore = edits.views > 0 ? edits.views : 0;
  var namedEdits = edits.edits - edits.anonEdits - ( edits.reverts / 2 );
  var editScore = ( ( -4 * edits.flaggedEdits ) + namedEdits + ( edits.anonEdits * 0.2 ) );
  var numContributors = edits.numberContributors;
  var byteScore = edits.bytesChanged / ( edits.edits / numContributors );
  if (byteScore < 0) {
    byteScore = -byteScore;
  }
  var contributionScore = ( numContributors / 2 );

  if ( edits.views > 0 && hrs < 84 ) {
    visitScore = -visitScore;
  }
  var bias = getBias(edits.distribution);

  var score = contributionScore * ( visitScore + editScore ) * exponential;
  score *= byteScore;

  if ( bias > 0 ) {
    score *= ( 1 - bias );
  }

  return score;
}

module.exports = {
  getBias: getBias,
  calculateScore: calculateScore
};