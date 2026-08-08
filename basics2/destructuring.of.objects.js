//node basics2/destructuring.of.objects.js
const course ={
    coursename:"DSA",
    price : "9980",
    courseInstructor : "Rathi"
}
const {courseInstructor : instructor}=course
console.log(instructor)