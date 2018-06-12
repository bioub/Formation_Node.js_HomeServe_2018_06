/*function coords3dFactory(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;

  return {
    x: x,
    y: y,
    z: z,
  };
}
*/
const coords3dFactory = (x = 0, y = 0, z = 0) => ({x, y, z});
