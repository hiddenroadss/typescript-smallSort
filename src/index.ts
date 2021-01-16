import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection} from './CharacterCollection';
import { LinkedList } from './LinkedList';


// const numberCollection = new NumberCollection([12, -4, -22, 99, 17, 5]);
// numberCollection.sort();

// console.log(numberCollection.data);

// const characterCollection = new CharacterCollection('XhyAdMm');
// characterCollection.sort();
// console.log(characterCollection.data);

const linkedList = new LinkedList()
linkedList.add(44);
linkedList.add(-222);
linkedList.add(99);
linkedList.add(2);


linkedList.sort();
linkedList.print();