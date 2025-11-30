
namespace ThisCouldBeBetter.Geometry
{

export interface Transform_Interpolatable extends TransformBase
{
	propertyName: string;
	interpolateWith:
	(
		other: Transform_Interpolatable,
		fractionOfProgressTowardOther: number
	) => Transform_Interpolatable;
}

}
