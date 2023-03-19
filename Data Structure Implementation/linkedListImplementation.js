class Node {
    constructor(value){
        this.value = value //contains value present in current object
        this.next = null //contains next object
    }
}
class LinkedList {
    constructor(){
        this.head = null //contains first object
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head //ensures the 'current element' which is about to become the 'head' remembers the 'past head element' as it's next element.
            this.head = node //makes new node as the head element.
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{

            let prev = this.head 
            while(prev.next){
                prev = prev.next // provides last object  
            }
            prev.next = node
        }
        this.size++
    }
    insert(value, index){
        if(index < this.size || index > this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }
        else{
            const node = new Node(value)
            let prev = this.head
            let currIdx = 0
            while(currIdx < index - 1){
                prev = prev.next
                currIdx++
            }
            // for(let i = 0; i < index-1; i++){
            //     prev = prev.next
            // }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    removeFrom(index){
        if(index < 0 || index > this.size){
            return null
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }
        else {
            let prev = this.head
            for(let i = 0; i < index - 1 ; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }
    removeValue(value){
        let removeNode
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            removeNode = this.head
            this.head = this.head.next
        }
        else {
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                removeNode = prev.next
                prev.next = removeNode.next
            }
            else{
                return -1
            }
        }
        this.size--
        return value
    }
    search(value){
        if(this.isEmpty()){
            return null
        }
        let i = 0
        let curr = this.head
        while(curr){
            if(curr.value ===value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }
    print(){
        if(this.isEmpty()){
            console.log("Linked list is empty.")
        }
        else{
            let curr = this.head 
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next // provides next object until loop reaches the last object. 
            }
            console.log(listValues);
        }
    }

} 

// console.log("is it empty?", newList.isEmpty());
// console.log("Prpending in linked list");
// console.log("this is linked list", newList);
// newList.prepend(10)
// newList.insert(111,0)
// newList.insert(11,1)
// newList.prepend(40)
// newList.insert(1,2)
// newList.append(20)
// newList.print()
// console.log("What is it's size?", newList.getSize());
// console.log("removed node",newList.removeFrom(10))
// newList.print()
// module.exports = newList
export default LinkedList