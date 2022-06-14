interface People {
  talk(): void;
  whoAmI: string;
}

class Human implements People {
  whoAmI = "human";
  talk = () => {
    console.log(`say ${this.whoAmI} : 말할 수 있어요`);
  };
}

class Robot {
  whoAmI = "robot";
  talk = () => {
    console.log(`say ${this.whoAmI}: 말할 수 있어요`);
  };
}

const humanInstance = new Human();
const robotInstance = new Robot();

const startTalk = (people: People): void => {
  people.talk();
};

startTalk(humanInstance); // human : 말할 수 있어요
startTalk(robotInstance); // robot : 말할 수 있어요
