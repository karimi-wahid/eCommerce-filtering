
const CategoryList = ({ category, setCategoryName }) => {
    return (
        <div className='w-full p-5 bg-neutral-100'>
            <h1 className='text-xl text-center font-semibold mb-5'>Category</h1>
            <ul>
                {category.map((curCategory, index) => (
                    <li
                        onClick={() => setCategoryName(curCategory)}
                        className='pb-2 cursor-pointer mt-2 hover:text-blue-500' key={index}>{curCategory.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryList