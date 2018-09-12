/**
 * Using TypeScript Tuples
 */

// Declare the tuple
let option: [string, boolean];

// Correctly initialize it
option = ['uppercase', true];

// Incorrect value order
//option = [true, 'uppercase'];

/**
 * Using TypeScript Tuples in Rest Parameters
 */
type Point3D = [number, number, number];

const draw = (...point3D: Point3D) => {
  console.log(point3D);
};

const xyzCoordinate: Point3D = [10, 20, 10];

// Passing the values as literals
draw(10, 20, 10); // [10, 20, 10]

// Passing indexes to the corresponding xyzCoordinate tuple
draw(xyzCoordinate[0], xyzCoordinate[1], xyzCoordinate[2]); // [10, 20, 10]

// Using the spread operator to pass the full xyzCoordinate tuple
draw(...xyzCoordinate); // [10, 20, 10]

/**
 * Using Optional Tuple Elements
 */
type Point = [number, number?, number?];

const x: Point = [10];
const xy: Point = [10, 20];
const xyz: Point = [10, 20, 10];

console.log(x.length); // 1
console.log(xy.length); // 2
console.log(xyz.length); // 3

/**
 * Using Rest Elements In Tuple Types
 */
type TestScores = [string, ...number[]];

const samTestScore = ['Sam', ...[100, 98, 99, 100]];
const davidTestScore = ['David', ...[100, 98, 100]];

console.log(samTestScore); // [ 'Sam', 100, 98, 99, 100 ]
console.log(davidTestScore); // [ 'David', 100, 98, 100 ]

/**
 * Using New 'Unknown' Top Type
 */
// let itemLocation: any = {
//   coordinates: { x: 10, y: 'cows', z: true }
// };

// This gives compilation error w/o a type-check
let itemLocation: unknown = {
  coordinates: { x: 10, y: 'cows', z: true }
};

// This method checks for the structural integrity of itemLocation
const itemLocationCheck = (loc: any): loc is { coordinates: { x: any; y: any; z: any } } => {
  /**
   * It checks that loc is defined.
   * It checks that loc is of type object.
   * It checks that loc has a property named coordinates.
   * Once this is done, it checks that coordinates has properties named x, y, and z.
   */
  return (
    !!loc &&
    typeof loc === 'object' &&
    'coordinates' in loc &&
    'x' in loc.coordinates &&
    'y' in loc.coordinates &&
    'z' in loc.coordinates
  );
};

// if (itemLocationCheck(itemLocation)) {
//   console.log(itemLocation.coordinates.x);
//   console.log(itemLocation.coordinates.y);
//   console.log(itemLocation.coordinates.z);
// }

// We can also satisfy TypeScript unknown check by doing a type assertion
type KnownStructure = { coordinates: { x: any; y: any; z: any } };
console.log((itemLocation as KnownStructure).coordinates.x);
console.log((itemLocation as KnownStructure).coordinates.y);
console.log((itemLocation as KnownStructure).coordinates.z);
