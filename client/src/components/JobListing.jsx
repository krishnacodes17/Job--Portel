import React, { useContext } from 'react'
import { AppContext } from '../context/App.context'
import { assets, JobCategories, JobLocations } from '../assets/assets'

function JobListing() {

    const {isSearched,searchFilter, setSearchFilter} = useContext(AppContext)

     // Clear title function
    const handleClearTitle = () => {
        setSearchFilter(prev => ({ ...prev, title: "" }))
    }

    // Clear location function
    const handleClearLocation = () => {
        setSearchFilter(prev => ({ ...prev, location: "" }))
    }

  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8 '>
      {/* sidebar */}

      <div className='w-full lg:w-1/4 bg-white px-4'>
        {/* search Filter */}
        {
            isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                <>
                    <h3 className='font-medium text-lg mb-4'>Current Seacrch</h3>
                    <div className='mb-4 to-gray-600'>
                        {searchFilter.title && (
                            <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded '>
                                {searchFilter.title}
                                <img onClick={handleClearTitle}  className='cursor-pointer ' src={assets.cross_icon} alt="" />
                            </span>
                        )}
                        {searchFilter.location && (
                            <span className='ml-2 inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded '>
                                {searchFilter.location}
                                <img onClick={handleClearLocation}  className='cursor-pointer ' src={assets.cross_icon} alt="" />
                            </span>
                        )}

                    </div>
                </>
            )
        }


        {/* category filter  */}
        <div className='max-lg: '>
            <h4 className='font-medium text-lg py-4'>Search for Filter</h4>
            <ul className='space-y-4 text-gray-600'>
                {
                    JobCategories.map((category,index)=>(
                        <li className='flex gap-3 items-center' key={index}>
                            <input className='scale-125' type="checkbox" name='' id='' />
                            {category}
                        </li>
                    ))
                }
            </ul>
        </div>


        {/* Locatation filter  */}
        <div className='max-lg: '>
            <h4 className='font-medium text-lg py-4 pt-14'>Search By  Location</h4>
            <ul className='space-y-4 text-gray-600'>
                {
                    JobLocations.map((location,index)=>(
                        <li className='flex gap-3 items-center' key={index}>
                            <input className='scale-125' type="checkbox" name='' id='' />
                            {location}
                        </li>
                    ))
                }
            </ul>
        </div>

      </div>


        {/* job listing */}
        <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
            <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
            <p className='mb-8'>Get your desired job from top company</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>

            </div>
        </section>

    </div>
  )
}

export default JobListing
