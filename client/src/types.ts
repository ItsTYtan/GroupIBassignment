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