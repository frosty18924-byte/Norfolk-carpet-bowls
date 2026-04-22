export interface CompetitionReport {
  year: string
  discipline: string
  title: string
  date: string
  location: string
  description: string
  participants: string
  format: string
  winner: string
  runnerUp: string
  detailedReport: string
  highlights: string[]
  fullResults: Array<{
    round: string
    teams: string[]
    result: string
  }>
}

export const competitionReports: Record<string, CompetitionReport> = {
  '2025-singles': {
    year: '2025',
    discipline: 'singles',
    title: 'Norfolk Singles 2025',
    date: 'Recent',
    location: 'Wortwell',
    description: 'This year\'s competition had 36 players enter, divided into 6 groups with the winners and runners up and 4 best 3rd places going into the knock out rounds.',
    participants: '36 players',
    format: 'Group stages + knockout rounds',
    winner: 'Matt (Reepham)',
    runnerUp: 'Charley (Brockdish)',
    detailedReport: 'Norfolk held the NCBA Singles tournament at Wortwell. This years competition had 36 player enter, these were divided in to 6 groups with the winners and runners up and 4 best 3rd places going in to the knock out rounds. In to the Knockout rounds we had 4 Reepham, 3 Syleham, 2 Wortwell, 2 Pulham, 2 Brockdish, 1 Sea Palling, 1 Antingham, and 1 Tacolneston. After the first round of knock outs we moved to the last 8. Syleham (Arthur) played Tacolneston (Chris) with Chris coming out the winner. Wortwell (Mick) played Reepham (Stephen) with Stephen coming out the winner. Reepham (Peter) played Brockdish (Charley) with Charley coming out the winner. Reepham (Matt) played Syleham (Les) with Matt coming out the winner. The semi-finals brought two one-sided games. The two Reepham comrades were pitted against each other, with Matt taking a 13-0 victory and Stephen retiring at the end of the fifth end. Meanwhile, on the other carpet, Charley from Brockdish played Chris from Tacolneston, with Charley dealing Chris an impressive 9-1 defeat, also only getting to five ends. The final was exactly as you would expect from two seasoned players. Charley went toe to toe with Matt, going 3-2 up against him ahead of the 5th end. Unfortunately for him, Matt then got a full 4 shots in that end, and a further 2 shots in the 6th end. A game well played, but unfortunately not enough to tear the title from the 9-time Singles\' winner.',
    highlights: [
      '36 players entered across 6 groups',
      '4 Reepham, 3 Syleham, 2 Wortwell, 2 Pulham, 2 Brockdish, 1 Sea Palling, 1 Antingham, 1 Tacolneston in knockout rounds',
      'Matt defeated Stephen 13-0 in semi-final (retired after 5 ends)',
      'Charley defeated Chris 9-1 in semi-final',
      'Matt won his 9th Singles title'
    ],
    fullResults: [
      {
        round: 'Group Stage',
        teams: ['4 Reepham', '3 Syleham', '2 Wortwell', '2 Pulham', '2 Brockdish', '1 Sea Palling', '1 Antingham', '1 Tacolneston'],
        result: '16 players advanced to knockout rounds'
      },
      {
        round: 'Quarter-Finals',
        teams: ['Chris (Tacolneston) vs Arthur (Syleham)', 'Stephen (Reepham) vs Mick (Wortwell)', 'Charley (Brockdish) vs Peter (Reepham)', 'Matt (Reepham) vs Les (Syleham)'],
        result: 'Chris, Stephen, Charley, Matt advanced'
      },
      {
        round: 'Semi-Finals',
        teams: ['Matt (Reepham) vs Stephen (Reepham)', 'Charley (Brockdish) vs Chris (Tacolneston)'],
        result: 'Matt won 13-0, Charley won 9-1'
      },
      {
        round: 'Final',
        teams: ['Matt (Reepham)', 'Charley (Brockdish)'],
        result: 'Matt won (9th Singles title)'
      }
    ]
  },
  '2025-fours': {
    year: '2025',
    discipline: 'fours',
    title: 'Norfolk Fours 2025',
    date: 'Recent',
    location: 'Wortwell',
    description: 'This year had 12 teams enter the competition, these were divided into two groups of six, with everyone playing each other. Winners and runners up of each group went through to the semi-finals.',
    participants: '12 teams',
    format: 'Group stages + knockout rounds',
    winner: 'Brockdish (Charley, Trish, Gill, Geoff)',
    runnerUp: 'Kenninghall',
    detailedReport: 'Norfolk held the NCBA Fours competition at Wortwell. This year had 12 teams enter the competition, these were divided into two groups of six, with everyone playing each other. Winners and runners up of each group went through to the semi-finals. The winners progressing into the semis were Brockdish and Tacolneston, and the runners up being Kenninghall and Sea Palling. Brockdish played Tacolneston, and Kenninghall played Sea Palling, with both Brockdish and Kenninghall progressing through to the final. Kenninghall started by going 6-0 up in the first end, Brockdish followed up by taking every subsequent end, meaning that they managed to cinch the victory 9-6. A big congrats to Charley, Trish, Gill and Geoff!',
    highlights: [
      '12 teams entered in 2 groups of 6',
      'Brockdish and Tacolneston group winners',
      'Kenninghall and Sea Palling group runners-up',
      'Brockdish came back from 6-0 down to win 9-6'
    ],
    fullResults: [
      {
        round: 'Group Stage',
        teams: ['12 teams in 2 groups'],
        result: 'Brockdish, Tacolneston, Kenninghall, Sea Palling advanced'
      },
      {
        round: 'Semi-Finals',
        teams: ['Brockdish vs Tacolneston', 'Kenninghall vs Sea Palling'],
        result: 'Brockdish and Kenninghall advanced'
      },
      {
        round: 'Final',
        teams: ['Brockdish (Charley, Trish, Gill, Geoff)', 'Kenninghall'],
        result: 'Brockdish won 9-6 (came back from 6-0 down)'
      }
    ]
  },
  '2025-triples': {
    year: '2025',
    discipline: 'triples',
    title: 'Norfolk Triples 2025',
    date: 'Recent',
    location: 'Wortwell',
    description: 'This year we had 15 teams enter the competition, these were divided in to 3 groups of 5 with everyone playing each other. Having just the winners and 1 highest runner up going through in to the semi final.',
    participants: '15 teams',
    format: 'Group stages + knockout rounds',
    winner: 'Wortwell',
    runnerUp: 'Reepham Robins',
    detailedReport: 'Norfolk held the NCBA Triples competition at Wortwell. This year we had 15 teams enter the competition, these were divided in to 3 groups of 5 with everyone playing each other. Having just the winners and 1 highest runner up going through in to the semi final. With Winners being Reepham Robins, Wortwell and Brockdish with Kenninghall getting the runners up spot. Wortwell faced off against Kenninghall and Reepham taking on Brockdish. Wortwell got off to a great start and built on the lead with Kenninghall conceding the game with an end to go. Reepham and Brockdish battled hard in the first 3 ends with Reepham then starting to control the game. Eventually coming out on top to meet Wortwell in the final. With a repeat of last years final Reepham vs Wortwell (although both teams being different players). The game was very close with single shots being scored on each end after 6 ends Wortwell leading 4-2. Reepham managing to take the final end but only scoring a single the title went back to Wortwell. Congratulations to Wortwell!',
    highlights: [
      '15 teams entered in 3 groups of 5',
      'Reepham Robins, Wortwell, Brockdish group winners',
      'Kenninghall highest runner-up',
      'Repeat of 2024 final: Wortwell vs Reepham Robins',
      'Wortwell won 4-3 in very close final'
    ],
    fullResults: [
      {
        round: 'Group Stage',
        teams: ['15 teams in 3 groups'],
        result: 'Reepham Robins, Wortwell, Brockdish, Kenninghall advanced'
      },
      {
        round: 'Semi-Finals',
        teams: ['Wortwell vs Kenninghall', 'Reepham Robins vs Brockdish'],
        result: 'Wortwell and Reepham Robins advanced'
      },
      {
        round: 'Final',
        teams: ['Wortwell', 'Reepham Robins'],
        result: 'Wortwell won 4-3 (very close game)'
      }
    ]
  },
  '2024-singles': {
    year: '2024',
    discipline: 'singles',
    title: 'Norfolk Singles 2024',
    date: 'Recent',
    location: 'Wortwell',
    description: '36 players entered this year\'s competition, divided into 6 groups with winners and runners up and 4 best 3rd places going into the knock out rounds.',
    participants: '36 players',
    format: 'Group stages + knockout rounds',
    winner: 'Matt Frost (Reepham)',
    runnerUp: 'Stephen Frost (Reepham)',
    detailedReport: 'Norfolk held the NCBA Singles tournament at Wortwell. This years competition had 36 player enter, these were divided in to 6 groups with the winners and runners up and 4 best 3rd places going in to the knock out rounds. In to the Knockout rounds we had 2 Kenninghall, 3 Tacolneston, 3 Wortwell, 2 Syleham, 4 Reepham, 1 Southrepps and 1 Sea Palling. After the first round of knock outs we moved to the last 8. Kenninghall (Phyllis) played Reepham (Matt). Matt coming out with the win. Kenninghall (Rosemary) played Reepham (Stephen) with Stephen coming out the winner. Reepham (Trevor) Played Tacolneston (Chris) With Trevour coming out the winner. Wortwell (Steve) played Syleham (Arthur) with Steve coming out the winner. The semi-finals brought two wonderful games. Stephen from Reepham played Steve from Wortwell, and Matt and Trevor from Reepham played one another. In near perfect timing, both Stephen and Matt went one shot down. They both clawed back in the next end, Matt getting one shot and Stephen getting two. The next end saw both games go 3-1 to the Frosts. The next three ends saw both Matt and Stephen gaining points. Steve and Stephen deciding not to play their last end, leaving their score at 7-1. Matt and Trevor played all 7, with Trevor gaining one shot, finishing the game 7-2. The final left nothing to desire. In a game where the woods have been described as "unable to be placed better if I went down and put them there", every shot seemed perfect. Matt had an unlucky first two ends, dropping two shots. Not to be beaten, especially by his father, he managed to gain a shot on the third end. Stephen one-upped him once again, gaining one shot in end four. The fifth end saw Matt getting two shots, putting the game at 3-3. Just when you think that Matt was about to steal the show with 3 woods holding, Stephen managed the perfect shot, resulting in a dead end. After an absolute nail biter, Matt managed to scrape through and win the game, maintaining his title as Norfolk singles champion for the 6th year in a row.',
    highlights: [
      '36 players entered across 6 groups',
      '4 Reepham players in knockout rounds',
      'Father vs son semi-finals: Stephen vs Steve, Matt vs Trevor',
      'Both semi-finals finished 7-1 and 7-2 respectively',
      'Matt won his 6th consecutive Singles title vs father Stephen'
    ],
    fullResults: [
      {
        round: 'Group Stage',
        teams: ['2 Kenninghall, 3 Tacolneston, 3 Wortwell, 2 Syleham, 4 Reepham, 1 Southrepps, 1 Sea Palling'],
        result: '16 players advanced to knockout rounds'
      },
      {
        round: 'Quarter-Finals',
        teams: ['Matt (Reepham) vs Phyllis (Kenninghall)', 'Stephen (Reepham) vs Rosemary (Kenninghall)', 'Trevor (Reepham) vs Chris (Tacolneston)', 'Steve (Wortwell) vs Arthur (Syleham)'],
        result: 'Matt, Stephen, Trevor, Steve advanced'
      },
      {
        round: 'Semi-Finals',
        teams: ['Stephen (Reepham) vs Steve (Wortwell)', 'Matt (Reepham) vs Trevor (Reepham)'],
        result: 'Stephen won 7-1, Matt won 7-2'
      },
      {
        round: 'Final',
        teams: ['Matt Frost (Reepham)', 'Stephen Frost (Reepham)'],
        result: 'Matt won (6th consecutive title)'
      }
    ]
  },
  '2023-singles': {
    year: '2023',
    discipline: 'singles',
    title: 'Norfolk Singles 2023',
    date: '2023',
    location: 'Wortwell',
    description: '36 players entered this year\'s competition, split over 6 groups with just the winners and the 2 highest runners-up going through to the next round.',
    participants: '36 players',
    format: 'Group stages + knockout rounds',
    winner: 'Matt Frost (Reepham)',
    runnerUp: 'Arthur (Syleham Wingfield)',
    detailedReport: 'Norfolk held the Singles competition at Wortwell. This years competition had 36 players enter, Split over 6 Groups with Just the winners and the 2 highest runners-up going through to the next round. The winners and runners-up that went through were: Rosemary, Rachel, Phyllis, Peter, Matt, Stephen, Tony and Arthur. Rachel overcame Peter, Tony Overcame Stephen, Matt overcame Phyllis and Arthur overcame Rosemary. On to the semi finals. Arthur kept Rachel and bay and that margin kept building to book his place in the final. Tony had a lead up until the last end where Matt managed to pick up 3 to progress and face on in the final. Both Arthur and Matt battled hard and it came down to the last shot. Arthur had to repeat a take out shot he had just done to win. Unfortunately clips it just wrong and still 1 down. This meant that Matt Took the title for the 5th year running. Very well played both in the final.',
    highlights: [
      '36 players entered across 6 groups',
      '8 players advanced: Rosemary, Rachel, Phyllis, Peter, Matt, Stephen, Tony, Arthur',
      'Arthur defeated Rachel in semi-final',
      'Matt defeated Tony in semi-final (picked up 3 in last end)',
      'Matt won 5th consecutive title by 1 shot'
    ],
    fullResults: [
      {
        round: 'Group Stage Qualifiers',
        teams: ['Rosemary', 'Rachel', 'Phyllis', 'Peter', 'Matt', 'Stephen', 'Tony', 'Arthur'],
        result: 'Advanced to quarter-finals'
      },
      {
        round: 'Quarter-Finals',
        teams: ['Rachel vs Peter', 'Tony vs Stephen', 'Matt vs Phyllis', 'Arthur vs Rosemary'],
        result: 'Rachel, Tony, Matt, Arthur advanced'
      },
      {
        round: 'Semi-Finals',
        teams: ['Arthur vs Rachel', 'Tony vs Matt'],
        result: 'Arthur and Matt advanced to final'
      },
      {
        round: 'Final',
        teams: ['Matt Frost (Reepham)', 'Arthur (Syleham Wingfield)'],
        result: 'Matt Frost won (5th consecutive title)'
      }
    ]
  },
  '2023-fours': {
    year: '2023',
    discipline: 'fours',
    title: 'Norfolk Rinks 2023',
    date: '2023',
    location: 'Wortwell',
    description: '10 Teams entered this years competition, split in 2 groups of 5 each team playing each other.',
    participants: '10 teams',
    format: 'Group stages + knockout rounds',
    winner: 'Reepham Robins',
    runnerUp: 'Pullham St Mary',
    detailedReport: 'Norfolk held the Rinks competition at Wortwell. 10 Teams entered this years competition, split in 2 groups of 5 each team playing each other. The Winners and the runners-up from each group would move on to the Semi finals. Group 1 Winners Tacolneston and Runners- up Pullham St Mary. Group 2 Winners Team stars and Runners-up Reepham Robins 2. Reepham robins played Tacolneston and Team stars played Pullham St Mary. Reepham Robins overcame Tacolneston and Pullham St Mary overcame Team Stars. The final was always in Reephams control and they kept that up to take the title. Congrats to Reepham Robins.',
    highlights: [
      '10 teams entered in 2 groups of 5',
      'Tacolneston and Pullham St Mary from Group 1',
      'Team Stars and Reepham Robins from Group 2',
      'Reepham Robins controlled the final throughout'
    ],
    fullResults: [
      {
        round: 'Group Stage',
        teams: ['10 teams in 2 groups'],
        result: 'Tacolneston, Pullham St Mary, Team Stars, Reepham Robins advanced'
      },
      {
        round: 'Semi-Finals',
        teams: ['Reepham Robins vs Tacolneston', 'Team Stars vs Pullham St Mary'],
        result: 'Reepham Robins and Pullham St Mary advanced'
      },
      {
        round: 'Final',
        teams: ['Reepham Robins', 'Pullham St Mary'],
        result: 'Reepham Robins won (controlled throughout)'
      }
    ]
  },
  '2023-pairs': {
    year: '2023',
    discipline: 'pairs',
    title: 'NCBA Pairs 2023',
    date: '2023',
    location: 'Wortwell',
    description: '30 teams entered this years pairs competiton. With a few teams having to drop out and teams being put together to fill spots.',
    participants: '30 teams',
    format: 'Group stages + knockout rounds',
    winner: 'Reepham Robins',
    runnerUp: 'Wortwell',
    detailedReport: 'Competition was held at Wortwell. 30 teams entered this years pairs competiton. With a few teams having to drop out and teams being put together to fill spots. Sadly it meant that was still 1 teams short. Teams were divided in to 5 groups with winners and the 3 highest runners up going in to the next round. The day went on and finally we came to the final. Wortwell Vs Reepham Robins. With the game coming down the the wire and with the final 2 ends being the critical ends. Reepham picked up a 3 to put them 1 up going in to the last end, With Reepham then having first woods meant the end got away from wortwell and with Matt blocking Steve out the title went to Reepham Robins for the 7th time. Congratulations Reepham Robins.',
    highlights: [
      '30 teams entered (1 team short)',
      '5 groups with winners and 3 highest runners-up advancing',
      'Final went down to the wire',
      'Reepham picked up 3 in penultimate end to go 1 up',
      'Reepham Robins won 7th Pairs title'
    ],
    fullResults: [
      {
        round: 'Group Stage',
        teams: ['30 teams in 5 groups'],
        result: 'Group winners and 3 best runners-up advanced'
      },
      {
        round: 'Final',
        teams: ['Reepham Robins', 'Wortwell'],
        result: 'Reepham Robins won (7th title)'
      }
    ]
  },
  '2023-triples': {
    year: '2023',
    discipline: 'triples',
    title: 'NCBA Triples 2023',
    date: '2023',
    location: 'Wortwell',
    description: '20 teams entered this years competition. This would be the first Norfolk competition of 2023.',
    participants: '20 teams',
    format: 'Group stages + knockout rounds',
    winner: 'Wortwell',
    runnerUp: 'Syleham Wingfield',
    detailedReport: 'Competition was held at wortwell, This would be the first norfolk competition of 2023. 20 teams entered this years competition. Theses teams split in to 4 groups and it would be the winners and the runners up for each group going in to the next round. These got down to Wortwell vs Reepham Robins and Syleham wingfield vs Tacolneston. It would be last years runners up that would be beaten by Wortwell and Syleham Wingfield would go to the final. The final was very well contested and it all came down to the final couple of ends with Wortwell coming out the winners. Congratulations to Wortwell.',
    highlights: [
      '20 teams entered in 4 groups',
      'First Norfolk competition of 2023',
      'Wortwell defeated Reepham Robins in semi-final',
      'Syleham Wingfield defeated Tacolneston in semi-final',
      'Final came down to final couple of ends'
    ],
    fullResults: [
      {
        round: 'Group Stage',
        teams: ['20 teams in 4 groups'],
        result: 'Group winners and runners-up advanced'
      },
      {
        round: 'Semi-Finals',
        teams: ['Wortwell vs Reepham Robins', 'Syleham Wingfield vs Tacolneston'],
        result: 'Wortwell and Syleham Wingfield advanced'
      },
      {
        round: 'Final',
        teams: ['Wortwell', 'Syleham Wingfield'],
        result: 'Wortwell won (final couple of ends decided it)'
      }
    ]
  },
}

// List of available report keys for easy checking
export const availableReports = Object.keys(competitionReports)
