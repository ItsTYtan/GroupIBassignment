export interface Notification {
  msg_id: string;
  msg: string;
  time: string;
}

export class PositionStyle {
  static topLeft = {
    left: "0px",
    top: "32px",
  };

  static topRight = {
    right: "0px",
    top: "32px",
  };

  static bottomLeft = {
    left: "0px",
    bottom: "32px",
    "flex-direction": "column-reverse",
  }

  static bottomRight = {
    right: "0px",
    bottom: "32px",
    "flex-direction": "column-reverse",
  }

  static numToPosition(positionNum: number): PositionStyle {
    switch (positionNum) {
      case 1: {
        return PositionStyle.topRight;
      }
      case 2: {
        return PositionStyle.topLeft;
      }
      case 3: {
        return PositionStyle.bottomRight;
      }
      case 4: {
        return PositionStyle.bottomLeft;
      }
      default: {
        return PositionStyle.topRight;
      }
    }
  }
}