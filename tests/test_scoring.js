var assert = require( 'assert');

const examples = require( './examples')
const scorer = require( './../')
const negatives = require( './negatives' );
const positives = require( './positives' );
const negativePushipedia = require( './pushipedia-negatives' );
const postivePushipedia = require( './pushipedia-positives' );
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

  it('pages edited by only only anonymous users are completely biased', function() {
    assert.ok( scorer.getBias( {} ) === 1 );
  });

  it('pages where three editors have done more work than 4 editors are bias', function() {
    assert.ok( scorer.getBias( { a: 12, b: 4, c: 11, d: 7, e: 2, f: 1, g: 2 } ) > 0.5 );
  });

  it('pages where two editors have done majority of edits are bias', function() {
    assert.ok( scorer.getBias( { a: 12, b: 2, c: 10, d: 2, e: 2 } ) > 0.5 );
  });

  it('pages where one editor has done double edits of 2nd editor are bias', function() {
    assert.ok( scorer.getBias( { a: 29, b: 4, c: 2, d: 12, e: 4 } ) > 0.5 );
  });

  it('pages with lots of editors and one extreme editor are not bias', function() {
    var bias = scorer.getBias( { "201":1,"685.":1,"Jen":2,"Sti":2,"Ade":6,"197":1,"Cor":5,"Law":21,"Biz":1,"186":1,"864.":1,"86.":2,"105":1,"Fel":5,"103":1,"Rob":1,"198":3,"35.":1,"82.":2,"189":2,"586.":1,"1905":1,"185":1,"Sas":11,"Col":3,"118":1,"Hap":3,"Ric":2,"81.":1,"Ano":82,"Pet":1,"Kin":1,"260":1,"205":1,"2A0":1,"79.":1,"Pjv":1,"179":1,"z190":2,"85.":1,"She":4,"Gof":1,"Dri":3,"190":1,"Ste":1,"Jus":2,"Jul":1,"169":2,"122":1,"2Z0":1,"Lor":1,"Doc":1,"Cre":3,"181":1,"2V0":1,"Qua":2,"Run":1,"Nos":2,"Zrs":1,"Lit":2,"Fer":1,"107":1,"s9.":1,"123":1,"Mel":1,"The":2,"Mag":1} );
    assert.ok( bias < 0.5 );
  });

  it('pages with lots of editors and one extreme editor are not bias', function() {
    var bias = scorer.getBias( { "201":1,"685.":1,"Jen":2,"Sti":2,"Ade":6,"197":1,"Cor":5,"Law":21,"Biz":1,"186":1,"864.":1,"86.":2,"105":1,"Fel":5,"103":1,"Rob":1,"198":3,"35.":1,"82.":2,"189":2,"586.":1,"1905":1,"185":1,"Sas":11,"Col":3,"118":1,"Hap":3,"Ric":2,"81.":1,"Ano":82,"Pet":1,"Kin":1,"260":1,"205":1,"2A0":1,"79.":1,"Pjv":1,"179":1,"z190":2,"85.":1,"She":4,"Gof":1,"Dri":3,"190":1,"Ste":1,"Jus":2,"Jul":1,"169":2,"122":1,"2Z0":1,"Lor":1,"Doc":1,"Cre":3,"181":1,"2V0":1,"Qua":2,"Run":1,"Nos":2,"Zrs":1,"Lit":2,"Fer":1,"107":1,"s9.":1,"123":1,"Mel":1,"The":2,"Mag":1} );
    assert.ok( bias < 0.5 );
  });

  it('pages with low number of edits editors and extreme editors are biased', function() {
    assert.ok( scorer.getBias( { a: 12, b: 2, c: 10, d: 2, e: 2 } ) > 0.5 );
    assert.ok( scorer.getBias( { a: 29, b: 4, c: 2, d: 12, e: 4 } ) > 0.5 );
  });
});

describe('calcScore', function() {
  it('page 1 is hotter than page 2 with half life 2 (more recent, less anon edits and reverts)', function() {
    assert.ok( calcScore(examples.page2, 2) < calcScore(examples.page, 2));
  });

  it('pages with 1 editor score lower than ones with multiple editors', function() {
    assert.ok( calcScore(examples.oneEditor, 2) < calcScore(examples.multipleEditors, 2));
  });

  it('ColinDexter is hotter than ConferenceParis', function() {
    assert.ok( calcScore(examples.ConferenceParis, 1.5) < calcScore(examples.ColinDexter, 1.5));
  });

  it('page 2 is hotter than page 1 with half life 10 (more recent, less anon edits and reverts)', function() {
    assert.ok( calcScore(examples.page2, 10) > calcScore(examples.page, 10));
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

  it('MartellusBennett is being vandalised', function() {
    assert.ok( calcScore(examples.MartellusBennett, 12) < 5, "MartellusBennett is being vandalised.");
  });

  it('DavidHamilton has more edits and bytes changed', function() {
    assert.ok( calcScore(examples.DearZindagi, 12) < calcScore(examples.DavidHamilton, 84));
  });

  it('Negative bytes is not a bad thing and results in a positive score.', function() {
    assert.ok( calcScore(examples.PeteBurns2, 84) > 0);
  });

  it('RashaanSalaam has a score below zero.', function() {
    assert.ok( calcScore(examples.RashaanSalaam, 1) < 0,
      'Although he died on the day of the trend. The edits were too minor for this to be trending.');
  });

  it('Women (BBC) has a score over zero despite one prolific editor.', function() {
    assert.ok( scorer.getBias(examples.Women.distribution) > 0, 'It has one prolific editor but lots of editors.');
    assert.ok( calcScore(examples.Women, 1) > 0, 'Score should thus be greater than zero');
  });

  it('Women (BBC) is trending more than RashaanSalaam over the course of the day', function() {
    assert.ok( calcScore(examples.RashaanSalaam, 24) < calcScore(examples.Women, 24));
  });

  it('Italian constitutional referendum is trending more than Jayalalithaa (less reverts)', function() {
    assert.ok( calcScore(examples.Jayalalithaa, 72) < calcScore(examples.ItalianReferendum, 72));
  });

  it('OaklandWarehouse is trending more than Jayalalithaa (more edits and editors)', function() {
    assert.ok( calcScore(examples.Jayalalithaa, 72) < calcScore(examples.OaklandWarehouse, 72));
  });

  it('but Jayalalithaa is more relevant than the warehouse fire for a week as it has views', function() {
    assert.ok( calcScore(examples.Jayalalithaa, 84) > calcScore(examples.OaklandWarehouse, 84));
  });

  it('Oakland fire is trending more than Trump', function() {
    assert.ok( calcScore(examples.OaklandWarehouse, 72) > calcScore(examples.TrumpNovember, 72));
  });

  it('Oakland fire is trending more than Deaths in 2016', function() {
    assert.ok( calcScore(examples.OaklandWarehouse, 72) > calcScore(examples.Deaths2016Nov, 72));
  });

  it('Oakland fire is trending more than TLC', function() {
    assert.ok( calcScore(examples.OaklandWarehouse, 72) > calcScore(examples.TLC, 72));
  });

  it('Everything but edits and contributors are optional', function() {
    assert.ok(
      isFinite( scorer.calculateScore( new Date(), examples.minimal, 72 ) )
    );
  });

  it('Something where zero bytes have changed scores -1', function() {
    assert.ok(
      scorer.calculateScore(
        new Date(),
        Object.assign( {}, examples.minimal, {
          bytesChanged: 0
        } ),
        72
      ) === -1
    );
  });

  it('RussianOlympics is trending more than Anthropology', function() {
    assert.ok( calcScore(examples.RussianOlympics, 12) > calcScore(examples.Anthropology, 12),
      'RussianOlympics has more editors. Bytes dont matter so much.');
  });

  it('WinterOlympics is trending more than Anthropology', function() {
    assert.ok( calcScore(examples.WinterOlympics, 12) > calcScore(examples.Anthropology, 12),
      'WinterOlympics has more editors. Bytes dont matter so much.');
  });

  it('Joshua Bonehill-Paine is trending more than Artificial Kidney', function() {
    assert.ok( calcScore(examples.JoshuaBonehillPaine, 1.5) > calcScore(examples.ArtificialKidney, 1.5),
      'Joshua Bonehill-Paine has more editors');
  });

  it('Employee Scheduling is trending less than Artificial Kidney', function() {
    assert.ok( calcScore(examples.EmployeeScheduling, 1.5) <= calcScore(examples.ArtificialKidney, 1.5),
      'We also check if they are the same as they are equally boring :)');
  });

  it('Grammys is trending less than PIA', function() {
    assert.ok( calcScore(examples.Grammys, 84) < calcScore(examples.PIA, 84),
      'The PIA article is new so could signal a breaking news story.');
  });

  it('UpconvertingNano is trending less than PVaughan', function() {
    assert.ok( calcScore(examples.UpconvertingNano, 84) < calcScore(examples.PVaughan, 84),
      'The UpconvertingNano story is new, but there is not enough editors/edits to be notable');
  });

  it( 'Check pushipedia notifications match with positive scores', function () {
    postivePushipedia.forEach( function ( example ) {
      var data = example.data;
      var score = scorer.calculateScore(new Date(data.trendedAt),
        {
          edits: data.edits,
          anonEdits: data.anonEdits,
          start: data.start,
          flaggedEdits: data.isVolatile ? 1 : 0,
          distribution: data.distribution,
          reverts: data.reverts,
          isNew: data.isNew,
          numberContributors: data.anonAuthors + data.uniqueAuthors
        }, 1.5);
      assert.ok( score > 1, example.title + ' has score of ' + score );
    });
  });

  it( 'Check pushipedia false notifications match with low scores', function () {
    negativePushipedia.forEach( function ( example ) {
      var data = example.data;
      var score = scorer.calculateScore(new Date(data.trendedAt),
        {
          edits: data.edits,
          anonEdits: data.anonEdits,
          start: data.start,
          isNew: data.isNew,
          reverts: data.reverts,
          flaggedEdits: data.isVolatile ? 1 : 0,
          distribution: data.distribution,
          numberContributors: data.anonAuthors + data.uniqueAuthors
        }, 1.5);
      assert.ok( score <= 0, example.title + ' has score of ' + score );
    });
  });

  it( 'Check trending.wmflabs positives', function () {
    positives.forEach( function ( data ) {
      var score = scorer.calculateScore(new Date(data.trendedAt),
        {
          edits: data.edits,
          anonEdits: data.anonEdits,
          start: data.start,
          isNew: data.isNew,
          reverts: data.reverts,
          flaggedEdits: data.volatileFlags,
          distribution: data.distribution,
          numberContributors: data.contributors.length + data.anons.length
        }, 1.5);
      assert.ok( score > 10, data.title + ' has score of ' + score );
    });
  });

  it( 'Check trending.wmflabs false positives', function () {
    negatives.forEach( function ( data ) {
      var expected = data._expected_max_score || 0;
      var score = scorer.calculateScore(new Date(data.trendedAt),
        {
          edits: data.edits,
          anonEdits: data.anonEdits,
          start: data.start,
          isNew: data.isNew,
          reverts: data.reverts,
          bytesChanged: data.bytesChanged,
          flaggedEdits: data.volatileFlags,
          distribution: data.distribution,
          numberContributors: data.contributors.length + data.anons.length
        }, 1.5);
      assert.ok( score < expected, data.title + ' has score of ' + score );
    });
  });
});

