import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function MarkerDrawer() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Marker position={[51.5453593, 7.4842446]} icon={getIcon(40)}>
        <Popup>
          <div className={`${styleClasses["map__marker-popup"]}`}>
            <div className={`${styleClasses["map__marker-popup-heading"]}`}>
              <div className="map__marker-popup-row">
                <span className={`${styleClasses["map__masjid-name"]}`}>
                  Dzemat Dortmund
                </span>
              </div>
              <div className="map__marker-popup-row">
                <span className={`${styleClasses["map__masjid-open-hours"]}`}>
                  open: Mon - Sun
                </span>
              </div>
            </div>
            <div className={`${styleClasses["map__marker-popup-body"]}`}>
              <div className="map__marker-popup-row flex justify-between">
                <span className={`${styleClasses["map__prayer-name"]}`}>
                  Fajr
                </span>
                <span className={`${styleClasses["map__prayer-time"]}`}>
                  05:38
                </span>
              </div>
              <div className="map__marker-popup-row flex justify-between">
                <span className={`${styleClasses["map__prayer-name"]}`}>
                  Shuruq
                </span>
                <span className={`${styleClasses["map__prayer-time"]}`}>
                  07:30
                </span>
              </div>
              <div className="map__marker-popup-row flex justify-between">
                <span className={`${styleClasses["map__prayer-name"]}`}>
                  Dhuhr
                </span>
                <span className={`${styleClasses["map__prayer-time"]}`}>
                  13:20
                </span>
              </div>
              <div className="map__marker-popup-row flex justify-between">
                <span className={`${styleClasses["map__prayer-name"]}`}>
                  Assr
                </span>
                <span className={`${styleClasses["map__prayer-time"]}`}>
                  16:27
                </span>
              </div>
              <div className="map__marker-popup-row flex justify-between">
                <span className={`${styleClasses["map__prayer-name"]}`}>
                  Maghrib
                </span>
                <span className={`${styleClasses["map__prayer-time"]}`}>
                  19:09
                </span>
              </div>
              <div className="map__marker-popup-row flex justify-between">
                <span className={`${styleClasses["map__prayer-name"]}`}>
                  Isha
                </span>
                <span className={`${styleClasses["map__prayer-time"]}`}>
                  20:54
                </span>
              </div>
            </div>
          </div>
        </Popup>
      </Marker>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
    </>
  );
}
