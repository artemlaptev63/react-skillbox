const myHometask: MyHometask = {
  howIDoIt: "I Do It Well",
  someArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", someArray: ["string one", 23] }],
}

type SomeArray = Array<string | number>;
type WithData = Array<BaseFields>;

interface BaseFields {
  howIDoIt: string;
  someArray: SomeArray;
};

interface MyHometask extends BaseFields {
  withData: WithData;
};
