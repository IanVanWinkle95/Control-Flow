// ---------Part 1---------


// const radius = 5;
// const PI = 3.1415;
// const area = PI * radius * radius;
// const singlePlantArea = 0.8;
// const initialPlantCount = 20;
// const maxCapacity = (area / singlePlantArea) | 0;

// try {
//     for (let week = 1; week <= 3; week++) {
//         let plantCount = initialPlantCount;
//         for (let i = 0; i < week; i++) {
//             plantCount *= 2;
//         }

//         if (plantCount > maxCapacity) {
//             throw new Error("Plants exceed maxCapacity");
//         }

//         console.log(`Week ${week}:`);
//         console.log(`  Plant count: ${plantCount}`);

//         const capacityPercentage = (plantCount / maxCapacity) * 100;
//         if (capacityPercentage > 80) {
//             console.log("Pruned");
//         } else if (capacityPercentage >= 50 && capacityPercentage <= 80) {
//             console.log("Monitor");
//         } else {
//             console.log("Plant");
//         }

//         console.log();
//     }
// } catch (error) {
//     console.error(error.message);
// }

// Week 3: Plants exceed maxCapacity


// -----------Part 2-----------

// const PI = 3.1415;
// const singlePlantArea = 0.8;
// const initialPlantCount = 100;
// const weeks = 10;

// let finalPlantCount = initialPlantCount;
// for (let i = 0; i < weeks; i++) {
//     finalPlantCount *= 2;
// }

// const requiredArea = finalPlantCount * singlePlantArea;

// let radius = requiredArea / PI;
// for (let i = 0; i < 10; i++) {
//     radius = 0.5 * (radius + requiredArea / (PI * radius));
// }

// console.log(`Final plant count: ${finalPlantCount}`);
// console.log(`Required area: ${requiredArea.toFixed(2)} square meters`);
// console.log(`Radius of expanded circular garden: ${radius.toFixed(2)} meters`);


// ----------Part 3-----------


const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const singlePlantArea = 0.8;
const initialPlantCount = 100; // Now starting with 100
const maxCapacity = (area / singlePlantArea) | 0;

// Throw a new error and log an appropriate message.
try {
    if (initialPlantCount > maxCapacity) {
        throw new Error("initialPlantCount exceeds maxCapacity");
    }

    for (let week = 1; week <= 3; week++) {
        let plantCount = initialPlantCount;
        for (let i = 0; i < week; i++) {
            plantCount *= 2;
        }
        
        if (plantCount > maxCapacity) {
            throw new Error(`Plants exceed maxCapacity in week ${week}`);
        }
        
        console.log(`Week ${week}:`);
        console.log(`  Plant count: ${plantCount}`);
        
        const capacityPercentage = (plantCount / maxCapacity) * 100;
        if (capacityPercentage > 80) {
            console.log("Pruned");
        } else if (capacityPercentage >= 50 && capacityPercentage <= 80) {
            console.log("Monitor");
        } else {
            console.log("Plant");
        }
        
        console.log();
    }
} catch (error) {
    console.error(`Error: ${error.message}`);
}