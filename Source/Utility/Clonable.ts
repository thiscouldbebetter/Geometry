
namespace ThisCouldBeBetter.Geometry
{

export interface Clonable<T>
{
	clone(): T;
	overwriteWith(other: T): T;
}

}
