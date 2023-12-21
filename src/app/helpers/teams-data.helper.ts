/**
 * Applies hierarchical structure to flat data linking items by parentId field
 * @param teamsData
 * @returns
 */
export function formatTeamsData(teamsData: any[]): any[] {
  let formattedTeamsData: any[] = [];

  // Get top level data stored
  teamsData.forEach((team: any, index: number) => {
    if (team && !team.used && !team.parentId) {
      formattedTeamsData.push(cloneObject(team));

      // Flag team as used
      team.used = true;
    }
  });

  // Get second level teams data
  teamsData.forEach((team, index) => {
    if (team && !team.used) {
      // Search top levels for matching parent ID
      let parent = formattedTeamsData.find((parentTeam) => {
        return team && team.parentId === parentTeam.id;
      });

      if (parent) {
        if (!parent.subTeams) {
          parent.subTeams = [];
        }
        parent.subTeams.push(cloneObject(team));
        team.used = true;
      }
    }
  });

  // Get third level teams data
  teamsData.forEach((team) => {
    if (team && !team.used) {
      // Search upper level for matching parent ID
      formattedTeamsData.forEach((topLevelTeam) => {
        if (topLevelTeam && topLevelTeam.subTeams) {
          let parent = topLevelTeam.subTeams.find((secondLevelTeam: any) => {
            return secondLevelTeam && secondLevelTeam.id === team.parentId;
          });

          if (parent) {
            if (!parent.subTeams) {
              parent.subTeams = [];
            }

            parent.subTeams.push(cloneObject(team));
            team.used = true;
          }
        }
      });
    }
  });

  return formattedTeamsData;
}

/**
 * Simple clone object function
 * @param objectToClone
 * @returns
 */
function cloneObject(objectToClone: object): object {
  return Object.assign({}, objectToClone);
}
