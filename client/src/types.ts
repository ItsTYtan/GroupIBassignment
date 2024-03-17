export interface Notification {
  msg_id: string;
  msg: string;
  time: string;
}

export class PositionStyle {
  static topLeft = {
    left: "0px",
    top: "0px",
  };

  static topRight = {
    right: "0px",
    top: "0px",
  };

  static bottomLeft = {
    left: "0px",
    bottom: "0px",
  }

  static bottomRight = {
    right: "0px",
    bottom: "0px",
  }
}