// const linkedList = require("./../conceptsandImplementation/linkedListImplementation.js")
import linkedList from "../conceptsandImplementation/linkedListImplementation.js"

var mergeTwoLists = function (l1, l2) {
    const newList = new linkedList()
    if (l1.value <= l2.value) {
        newList.head.value = l1.value
        newList.next = null
        l1 = l1.next
    }
    else {
        newList.head.value = l2.value
        newList.next = null
        l2 = l2.next
    }
    while (l1.next !== null || l2.next !== null) {
        if(l1.next === null){
            newList.next = l2
            return
        }
          if(l2.next === null){
            newList.next = l1
            return
        }
        if (l1.value <= l2.value) {
            newList.next.value = l1.next.value
            l1 = l1.next
        }
        else {
            newList.next.value = l2.next.value
            l2 = l2.next
        }
    }
    return newList
};
const list1 = new linkedList()
const list2 = new linkedList()
list1.append(10)
list2.append(20)
list1.append(30)
list2.append(40)
list1.append(50)
list2.append(70)
list2.append(80)
list1.append(90)
console.log(list1);
let l1 = list1.head
let l2 = list2.head
const newL = mergeTwoLists(l1,l2)

console.log(newL)