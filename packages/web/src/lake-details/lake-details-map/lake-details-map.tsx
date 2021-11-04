import React, { memo } from 'react';
import GoogleMapReact from 'google-map-react';
import { useLakeDetailsStyles } from '../useLakeDetailsStyles';
import RoomIcon from '@material-ui/icons/Room';

interface LakeDetailsMapProps {
  center: {
    lng: number;
    lat: number;
  };
  zoom: number;
}

const MapMarker: any = () => {
  const classes = useLakeDetailsStyles();
  return (
    <div>
      <RoomIcon className={classes.mapPicker} />
    </div>
  );
};

export const LakeDetailsMap = memo(({ center, zoom }: LakeDetailsMapProps) => {
  const classes = useLakeDetailsStyles();
  return (
    <div className={classes.map}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MapMarker {...center} />
      </GoogleMapReact>
    </div>
  );
});
