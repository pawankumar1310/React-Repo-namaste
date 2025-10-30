import { ItemList } from "./ItemList";

export const RestaurantCategory = ({ data }) => {
    console.log(data);
    return (
        <>
            <div className="w-6/12 mx-auto bg-gray my-4 shadow-lg  ">

                <div className="flex justify-between">
                    {/* Header ^▽△ */}
                    <span>{data.title} ({data?.categories?.itemCards?.length})</span>
                    <span>▽</span>
                </div>
                {/* Accordion body */}
                <ItemList items={data?.categories?.itemCards} />
            </div>
        </>
    )
}