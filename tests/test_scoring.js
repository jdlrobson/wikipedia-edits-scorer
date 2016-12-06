var assert = require( 'assert');

const examples = require( './examples')
const scorer = require( './../')

require("mocha-jshint")();

function calcScore(example, halflife) {
  return scorer.calculateScore(new Date(example.trendedAt || example.updated ), Object.assign( {
      flaggedEdits: example.volatileFlags,
      numberContributors: example.anons.length + example.contributors.length
    }, example ), halflife);
}

describe('getBias', function() {
  it('pages where all editors have same number of edits are not biased', function() {
    assert.ok( scorer.getBias( { a: 1, b: 1, c: 1, d: 1 } ) === 0 );
  });

  it('pages edited by only one person are completely biased', function() {
    assert.ok( scorer.getBias( { a: 1 } ) === 1 );
  });
});

describe('calcScore', function() {
  it('page 1 is hotter than page 2 with half life 2 (more recent, less anon edits and reverts)', function() {
    assert.ok( calcScore(examples.page2, 2) < calcScore(examples.page, 2));
  });

  it('page 2 is hotter than page 1 with half life 10 (more recent, less anon edits and reverts)', function() {
    assert.ok( calcScore(examples.page2, 10) < calcScore(examples.page, 10));
  });

  it('page 3 is hotter than page 4 (same edits but more contributors)', function() {
    assert.ok( calcScore(examples.page3, 10) > calcScore(examples.page4, 10));
  });

  it('things that have visits get weighed down heavily with small half lifes', function() {
    assert.ok( calcScore(examples.Hoboken, 24) > calcScore(examples.ShimonPeres, 24));
  });

  it('if things have been viewed they show up in the `by week` section', function() {
    assert.ok( calcScore(examples.ShimonPeres, 84) > calcScore(examples.Hoboken, 84));
  });

  it('number of contributors weighs more heavily than number of edits', function() {
    assert.ok( calcScore(examples.PacificTyphoon, 84) > calcScore(examples.Liliuokalani, 84));
  });

  it('number of contributors weighs more heavily than number of edits - even if only half the number of edits', function() {
    assert.ok( calcScore(examples.CascadeMall, 84) > calcScore(examples.PacificTyphoon, 84));
  });

  it('bias of 0 doesnt give infinite score', function() {
    assert.ok( scorer.getBias(examples.DearZindagi.distribution) === 0, 'Bias of example is zero' )
    assert.ok( isFinite(calcScore(examples.DearZindagi, 12)), 'But score is finite' );
  });

  it('DavidHamilton has more edits and bytes changed', function() {
    assert.ok( calcScore(examples.DearZindagi, 12) < calcScore(examples.DavidHamilton, 84));
  });

  it('Negative bytes is not a bad thing and results in a positive score.', function() {
    assert.ok( calcScore(examples.PeteBurns2, 84) > 0);
  });
});
