$( document ).ready(function() {
    //console.log( "ready!" );

    var theLanguage = $('html').attr('lang');

    if (theLanguage == 'sv') {
    
        // Replace text    
        console.log ("Lang = sv");
               
     // Inside a course (title)
        $("#page-course-view-topics .topics li:nth-child(2) h3 span").text("Vidare läsning");



        $("body.course-2 .page-header-headings h1").text("Introduktion till mångfald, rättvisa och inkludering");
        //Badge
        $("body.course-2 .badges span.badge-name").text("Introduktion till mångfald, rättvisa och inkludering");
        $("body.course-2#page-badges-view .name.cell.c1").text("Introduktion till mångfald, rättvisa och inkludering"); 
        
        
        $("body.course-3 .page-header-headings h1").text("Utformning och utveckling av inkluderande program");
        //Badge
        $("body.course-3 .badges span.badge-name").text("Utformning och utveckling av inkluderande program");
        $("body.course-3#page-badges-view .name.cell.c1").text("Utformning och utveckling av inkluderande program"); 
        
        
        $("body.course-4 .page-header-headings h1").text("Könsidentitet, sexualitet, kultur och språk");
        //Badge
        $("body.course-4 .badges span.badge-name").text("Könsidentitet, sexualitet, kultur och språk");
        $("body.course-4#page-badges-view .name.cell.c1").text("Könsidentitet, sexualitet, kultur och språk"); 
        
        
        $("body.course-5 .page-header-headings h1").text("Inkludering av studerande med särskilda behov inom högre utbildning");
        //Badge
        $("body.course-5 .badges span.badge-name").text("Inkludering av studerande med särskilda behov inom högre utbildning");
        $("body.course-5#page-badges-view .name.cell.c1").text("Inkludering av studerande med särskilda behov inom högre utbildning"); 
        
        
        $("body.course-6 .page-header-headings h1").text("Utbildning i social rättvisa och konfliktlösning");
        //Badge
        $("body.course-6 .badges span.badge-name").text("Utbildning i social rättvisa och konfliktlösning");
        $("body.course-6#page-badges-view .name.cell.c1").text("Utbildning i social rättvisa och konfliktlösning"); 
        
        
        $("body.course-7 .page-header-headings h1").text("Teknologi för inkludering");
        //Badge
        $("body.course-7 .badges span.badge-name").text("Teknologi för inkludering");
        $("body.course-7#page-badges-view .name.cell.c1").text("Teknologi för inkludering");         
     
     // Inside a course (breadcrumbs)
         $("body.course-2 #page-navbar .breadcrumb li.breadcrumb-item:nth-child(3) a").text("Introduktion till mångfald, rättvisa och inkludering");
         $("body.course-3 #page-navbar .breadcrumb li.breadcrumb-item:nth-child(3) a").text("Utformning och utveckling av inkluderande program");
         $("body.course-4 #page-navbar .breadcrumb li.breadcrumb-item:nth-child(3) a").text("Könsidentitet, sexualitet, kultur och språk");
 
         $("body.course-5 #page-navbar .breadcrumb li.breadcrumb-item:nth-child(3) a").text("Inkludering av studerande med särskilda behov inom högre utbildning");
         $("body.course-6 #page-navbar .breadcrumb li.breadcrumb-item:nth-child(3) a").text("Utbildning i social rättvisa och konfliktlösning");
         $("body.course-7 #page-navbar .breadcrumb li.breadcrumb-item:nth-child(3) a").text("Teknologi för inkludering");
 
     
     // Sidebar courses
        $(".list-group-item [data-key='2'] span.text").text("Introduktion till mångfald, rättvisa och inkludering");
        $(".list-group-item [data-key='3'] span.text").text("Utformning och utveckling av inkluderande program");
        $(".list-group-item [data-key='4'] span.text").text("Könsidentitet, sexualitet, kultur och språk");
        $(".list-group-item [data-key='5'] span.text").text("Inkludering av studerande med särskilda behov inom högre utbildning");
        $(".list-group-item [data-key='6'] span.text").text("Utbildning i social rättvisa och konfliktlösning");
        $(".list-group-item [data-key='7'] span.text").text("Teknologi för inkludering");
             
    }     


     
});
