import React from 'react'
import Flamingo from '../images/flamingo.jpg'
import Panda from '../images/panda.jpg'
import Fox from '../images/fox.jpg'
import Cheetah from '../images/cheetah.jpg'


const Article = () => {
    return (
        <>
        <div class="antialiased text-green-900 font-sans p-6">
                <div class="container mx-auto">
                    <h2 className="md:text-6xl mb-14 text-center">Recent Articles</h2>
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                            <a href="/services" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div class="relative pb-48 overflow-hidden">
                                    <img class="absolute inset-0 h-full w-full object-cover" src={Flamingo} alt="beauty" />
                                </div>
                                <div class="p-4">
                                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Birds</span>
                                        <h2 class="mt-2 mb-2  font-bold">10 Amazing facts about Flamingos</h2>
                                        <p class="text-sm">
                                        Flamingos or flamingoes are a type of wading bird in the family 
                                        Phoenicopteridae, the only bird family in the order Phoenicopteriformes
                                        </p>
                                </div>
                                <div class="p-4 border-t border-b font-bold text-xs text-gray-700">
                                    <span class="flex items-center">
                                        <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Read Article
                                    </span>        
                                </div>
                            </a>
                        </div>

                        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                            <a href="/services" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div class="relative pb-48 overflow-hidden">
                                    <img class="absolute inset-0 h-full w-full object-cover" src={Panda} alt="nail" />
                                </div>
                                <div class="p-4">
                                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Wildlife</span>
                                    <h2 class="mt-2 mb-2  font-bold">Where are the Giant Pandas found?</h2>
                                    <p class="text-sm">Also known as the panda bear, is a bear native to South Central China. 
                                    It is characterised by its bold black-and-white coat and rotund body. </p>
                                </div>
                                <div class="p-4 border-t border-b font-bold text-xs text-gray-700">
                                    <span class="flex items-center">
                                        <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Read Article
                                    </span>        
                                </div>
                            </a>
                        </div>

                        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                            <a href="/services" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div class="relative pb-48 overflow-hidden">
                                    <img class="absolute inset-0 h-full w-full object-cover" src={Fox} alt="Braid" />
                                </div>
                                <div class="p-4">
                                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Wildlife</span>
                                    <h2 class="mt-2 mb-2  font-bold">All about Fox</h2>
                                    <p class="text-sm">Foxes are omnivorous mammals belonging to several genera of the family Canidae. 
                                    They have a flattened skull, upright triangular ears, a pointed snout, and a long bushy tail.</p>
                                </div>
                                <div class="p-4 border-t border-b font-bold text-xs text-gray-700">
                                    <span class="flex items-center">
                                        <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Read Article
                                    </span>        
                                </div>
                            </a>
                        </div>

                        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                            <a href="/services" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div class="relative pb-48 overflow-hidden">
                                    <img class="absolute inset-0 h-full w-full object-cover" src={Cheetah} alt="massage" />
                                </div>
                                <div class="p-4">
                                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Wildlife</span>
                                    <h2 class="mt-2 mb-2  font-bold">How Cheetahs survive in the Wild</h2>
                                    <p class="text-sm">The cheetah is a large cat native to Africa and central Iran. It is the fastest land animal, 
                                    estimated to be capable of running at 80 to 128 km/h</p>
                                </div>
                                <div class="p-4 border-t border-b text-xs font-bold text-gray-700">
                                    <span class="flex items-center">
                                        <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Read Article
                                    </span>        
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article
