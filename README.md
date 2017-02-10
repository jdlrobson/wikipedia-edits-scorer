Evaluate Wikipedia edit activity.

	const scorer = require( 'wikipedia-edits-scorer');
	scorer.calculateScore( new Date(), {
			edits: 10,
			// when you started watching edits
			start: '2016-12-02T16:39:49.334Z',
			anonEdits: 10,
			numberContributors: 10,
			reverts: 0,
			bytesChanged: 0,
			distribution: { Jon: 4, David: 3, Lyall: 3, '127.0.0.1': 10 },
			// traffic it got (in last 24 hrs)
			views: 0,
			// suspicious edits (e.g. vandalism)
			flaggedEdits: 0
		},
		// decay period
		12 );
