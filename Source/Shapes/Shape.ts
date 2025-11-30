
namespace ThisCouldBeBetter.Geometry
{

export interface Shape
	extends Clonable<Shape>, Equatable<Shape>, Transformable<Shape>
{
	collider(): Shape;
	containsPoint(pointToCheck: Coords): boolean;
	normalAtPos(posToCheck: Coords, normalOut: Coords): Coords;
	pointRandom(randomizer: Randomizer): Coords;
	surfacePointNearPos(posToCheck: Coords, surfacePointOut: Coords): Coords;
	toBoxAxisAligned(boxOut: BoxAxisAligned): BoxAxisAligned;
}

}
