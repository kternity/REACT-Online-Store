const catalog = [
   {
      title: "Banana",
      Price: 4.99,
      category: "Fruit",
      image: "test1.png",
   },
   {
      title: "Kiwi",
      Price: 5.99,
      category: "Fruit",
      image: "test2.png",
   },{
      title: "Kiwi",
      Price: 5.99,
      category: "Fruit",
      image: "test2.png",
   },{
      title: "Kiwi",
      Price: 5.99,
      category: "Fruit",
      image: "test2.png",
   },{
      title: "Kiwi",
      Price: 5.99,
      category: "Fruit",
      image: "test2.png",
   },{
      title: "Kiwi",
      Price: 5.99,
      category: "Fruit",
      image: "test2.png",
   },
];

class DataService {
   getCatalog() {
      //Todo: should connect to server and get the catalog from server
      return catalog;
   }
}
export default DataService; 