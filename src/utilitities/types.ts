export interface language {
  language: "en" | "pt";
}

export interface mobileDevice {
  device:
    | "SOUND_SYSTEM"
    | "MICROWAVE"
    | "AIR_CONDITIONER"
    | "CAMERA"
    | "STOVE"
    | "DISHWASHER"
    | "TV"
    | "COFFEE"
    | "LAMP"
    | "CAR"
    | "FRIDGE"
    | "WASHING_MACHINE"
    | "NONE";
}

export interface pageScrollLine {
  area:
    | "FIRST_LINE"
    | "HALF_PROTOTYPE"
    | "FULL_PROTOTYPE"
    | "PROTOTYPE_BOTTOM_CURVE"
    | "BOTTOM_LINE"
    | "FRONTEND_CURVE"
    | "HALF_FRONTEND"
    | "FULL_FRONTEND"
    | "FRONTEND_BOTTOM_CURVER"
    | "FRONTEND_BOTTOM_LINE"
    | "BACKEND_CURVE"
    | "HALF_BACKEND"
    | "FULL_BACKEND"
    | "OTHERS_CURVE"
    | "OTHERS_LINE"
    | "PLUG"
    | "CLOUD";
}
