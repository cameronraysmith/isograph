import React from "react";
import { iso } from "@isograph/react";
import { Card, CardContent } from "@mui/material";

import { ResolverParameterType as PetCheckinsCardParams } from "@iso/Pet/PetCheckinsCard/reader.isograph";

export const PetCheckinsCard = iso<
  PetCheckinsCardParams,
  ReturnType<typeof PetCheckinsCardComponent>
>`
  Pet.PetCheckinsCard @component {
    id,
    checkins {
      id,
      location,
      time,
    },
  }
`(PetCheckinsCardComponent);

function PetCheckinsCardComponent(props: PetCheckinsCardParams) {
  return (
    <Card variant="outlined" sx={{ width: 450, boxShadow: 3 }}>
      <CardContent>
        <h2>Check-ins</h2>
        <ul>
          {props.data.checkins.map((checkin) => (
            <li key={checkin.id}>
              <b>{checkin.location}</b> at {checkin.time}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
