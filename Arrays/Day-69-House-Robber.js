function rob(nums) {
    let house1 = 0;
    let house2 = 0;
    for (let i = 0; i < nums.length; i++) {
        let Amount = Math.max(house1 + nums[i], house2);
        house2 = house1;
        house1 = Amount;
    }
    return house2;
}
