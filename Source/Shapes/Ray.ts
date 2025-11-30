
namespace ThisCouldBeBetter.Geometry
{

export class Ray
{
	vertex: Coords;
	direction: Coords;

	constructor(vertex: Coords, direction: Coords)
	{
		this.vertex = vertex;
		this.direction = direction;
	}

	static fromVertexAndDirection(vertex: Coords, direction: Coords): Ray
	{
		return new Ray(vertex, direction);
	}

}

}
