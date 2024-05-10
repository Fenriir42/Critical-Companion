import React from 'react';

interface CampaignSheetProps {
  owner: string;
  role: string;
  characterName?: string;
  numberOfPlayers: number;
}

const CampaignSheet: React.FC<CampaignSheetProps> = ({
  owner,
  role,
  characterName,
  numberOfPlayers,
}) => {
  return (
    <div className="campaign-sheet">
      <h2>{owner}'s Campaign</h2>
      <p>Role: {role}</p>
      {role === 'Player' && <p>Character Name: {characterName}</p>}
      <p>Number of Players: {numberOfPlayers}</p>
    </div>
  );
};

export default CampaignSheet;
