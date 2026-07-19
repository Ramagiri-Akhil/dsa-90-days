function nextGreaterElement(nums1,nums2){
    const n = nums2.length;
    const map = new Map();
    const stack = [];
    for(let i = n - 1; i >= 0; i--){
        while(stack.length > 0 && stack[stack.length - 1] <= nums2[i]){
            stack.pop();
        }
        if(stack.length > 0){
            map.set(nums2[i],stack[stack.length - 1])
        }else{
            map.set(nums2[i],-1)
        }
        stack.push(nums2[i])
    }
    const answers = [];
    for(const num of nums1){
        answers.push(map.get(num))
    }
    return answers;
}