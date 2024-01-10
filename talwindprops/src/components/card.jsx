//import React from 'react'
const user = { username: 'Varsha' };
const btn1 = { btn1: 'photo' };
const btn2 = { btn2: 'travel' };
const btn3 = { btn3: 'winter' };
function card(username,btn) {
  console.log(username)
  console.log(btn)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="https://images.unsplash.com/photo-1552152370-fb05b25ff17d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{user.username}</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet,  adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{btn1.btn1}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{btn2.btn2}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{btn3.btn3}</span>
  </div>
</div>
  )
}

export default card
