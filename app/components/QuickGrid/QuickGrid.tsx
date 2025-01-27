import React from 'react';
import { GoLaw, GoBriefcase, GoGlobe } from "react-icons/go";
import '@/app/styles/QuickGrid.css';



const QuickGrid = () => {
   return (
      <div className="
         grid 
         grid-cols-1 
         sm:grid-cols-2 
         lg:grid-cols-3 
         gap-0 
         text-lg
      ">
         <div className='w-full h-full overflow-hidden'>
            <a href='#carousel'>
               <div className="
                  w-full 
                  h-full 
                  bg-cover 
                  bg-center 
                  bg-[url('https://picsum.photos/id/24/1200')]
                  transition-transform 
                  duration-1000 
                  transform 
                  md:hover:scale-125
               ">
                  <div className='
                     w-full 
                     h-full 
                     imgOverlay
                     flex 
                     flex-col 
                     justify-center
                     items-center 
                     text-center 
                     imgOverlay
                  '>
                     <div className='
                        QGIcon 
                        flex
                        justify-center
                        items-end
                     '>
                        <GoLaw className='text-8xl text-[#ad9366] mb-5' />
                     </div>
                     <div className='QGText'>
                        <p className='text-white line-clamp-4'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                     </div>
                  </div>
               </div>
            </a>            
         </div>
         
         <div className='w-full h-full overflow-hidden'>
            <a href='#'>
               <div className="
                  w-full 
                  h-full 
                  hidden 
                  sm:flex 
                  bg-cover 
                  bg-center 
                  bg-[url('https://picsum.photos/id/299/1200')]  
                  transition-transform 
                  duration-1000 
                  transform 
                  md:hover:scale-125
               ">
                  <div className='
                     w-full 
                     h-full 
                     imgOverlay
                     flex 
                     flex-col 
                     justify-center
                     items-center 
                     text-center 
                  '>
                     <div className='
                        QGIcon 
                        flex
                        justify-center
                        items-end
                     '>
                        <GoGlobe className='text-8xl text-[#ad9366] mb-5' />
                     </div>
                     <div className='QGText'>
                        <p className='text-white line-clamp-1 text-xs'>TODO: tornar isto em posts?</p>
                        <p className='text-white line-clamp-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                     </div>
                  </div>
               </div>
            </a>
         </div>

         
         <div className='w-full h-full overflow-hidden'>
            <a href='#trueFooter'>
               <div className="
                  w-full 
                  h-full 
                  hidden 
                  lg:flex 
                  bg-cover 
                  bg-center 
                  bg-[url('https://picsum.photos/id/7/1200')] 
                  transition-transform
                  duration-1000 
                  transform 
                  md:hover:scale-125
               ">
                  <div className='
                     w-full 
                     h-full 
                     imgOverlay
                     flex 
                     flex-col 
                     justify-center
                     items-center 
                     text-center
                  '>
                     <div className='
                        QGIcon 
                        flex
                        justify-center
                        items-end
                     '>
                        <GoBriefcase className='text-8xl text-[#ad9366] mb-5' />
                     </div>
                     <div className='QGText'>
                        <p className='text-white line-clamp-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque sapien non erat rhoncus laoreet in eget tellus. Sed egestas sed leo ac scelerisque. Proin ac lorem vel lectus congue interdum. Phasellus luctus nisi porta risus tincidunt volutpat. Cras accumsan ligula vel velit luctus, a ultrices lorem fringilla. Nulla fermentum diam vitae elementum iaculis. Maecenas ac purus mi. Proin ac purus nec lectus molestie efficitur. Nulla sed lobortis leo, non suscipit nisl. Duis at volutpat felis. Pellentesque efficitur sapien at massa consequat tincidunt. Duis tincidunt tempor enim, non pretium velit. Nullam egestas facilisis lectus, ac volutpat ante sollicitudin a. Donec tristique mauris vitae sagittis hendrerit. Donec lacinia risus in lectus pretium, id laoreet lorem varius. Vestibulum venenatis, quam sit amet dapibus finibus, nulla leo lacinia orci, non pharetra leo tellus quis felis. Nulla ac metus at velit dictum tempus et nec massa. Suspendisse dapibus odio eget consequat fringilla. Mauris at volutpat nibh. Maecenas eget nulla metus. Nullam rutrum, elit ut mollis mollis, ipsum eros molestie erat, quis interdum lectus libero efficitur ipsum. Aenean tristique, mi sed laoreet dapibus, sem nisl malesuada est, sit amet sollicitudin sapien lorem et nibh. Ut tempor magna feugiat, accumsan felis ac, egestas quam.</p>
                     </div>
                  </div>
               </div>
            </a>
         </div>
      </div>
   )
}

export default QuickGrid;