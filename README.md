# dashboard-with-tailwind-css

You can view full version at: https://modest-fermat-cd8ba1.netlify.app/public/dashboard.html  
**Cool Features:**  
1)Sidebar  
2)tables with horizonal scrollbar  
3)cards  
4) Sidebar that's static when screen is large  
5) We have one wrapper div that wraps everything, and displays 2 components as flex 1)Sidebar 2) everything else (wrap it in another div).   
<div>  
<div :class="openSidebar ? 'block' : 'hidden'" class="bg-black bg-opacity-50 fixed inset-0 z-20 lg:hidden">  
empty div that is only visible when sidebar is on (on small screens) providing that black background that you can click to close the sidebar  
</div>  
<div>  
SIdebar  
</div>  
<div>  
<header>...content</hedear>     
<main>...content </main>     
</div>  
</div>  
4)Everything responsive  
