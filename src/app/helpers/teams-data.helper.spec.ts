import * as teamsDataHelper from './teams-data.helper';

describe('TeamsDataServiceHelper', () => {
  const exampleData = [
    {
      id: 'team_a',
      name: 'Team A',
      parentId: null,
    },
    {
      id: 'team_b',
      name: 'Team B',
      parentId: null,
    },
    {
      id: 'team_a1',
      name: 'Team A1',
      parentId: 'team_a',
    },
  ];

  const exampleFormattedData = [
    {
      id: 'team_a',
      name: 'Team A',
      parentId: null,
      subTeams: [
        {
          id: 'team_a1',
          name: 'Team A1',
          parentId: 'team_a',
        },
      ],
    },
    {
      id: 'team_b',
      name: 'Team B',
      parentId: null,
    },
  ];

  it('should produce correctly formatted data', () => {
    expect(teamsDataHelper.formatTeamsData(exampleData)).toEqual(
      exampleFormattedData
    );
  });
});
