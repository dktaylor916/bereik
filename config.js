var config = {
    style: 'mapbox://styles/dtaylorgoud/cko9w20ur0id717pqiumlfhac',
    accessToken: 'pk.eyJ1IjoiZHRheWxvcmdvdWQiLCJhIjoiY2tlbzA1OHltMjJyNjMwcGM2eHZsMGowaiJ9.jtxQ1bgoZL9_sacqiAlTsg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Complete Neighborhoods',
    subtitle: 'A study of accessibility in region of Southeast Netherlands',
    
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'What makes a complete neighborhood?',
            description: 'A “complete neighborhood” is an area where residents have safe and convenient access to goods and services they need on a daily or regular basis. As urbanism continues to grow, it is important for regions to remain accessible for all residents. The emphasis on complete neighborhoods ensures that all residents have access to the services for a healthy and happy life. For the purposes of this study we have defined safe and convenient access to a 15 minute bike ride.',
            location: {
                center: [5.71624, 51.38566],
zoom: 10.36,
pitch: 0.00,
bearing: -0.52
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'huisarts',
                       opacity: 0},
                       {
                        layer: 'trial_one',
                           opacity: 0},
                       {
                        layer: 'centroid',
                           opacity: 0},
                    {
                    layer: 'supermarkets',
                       opacity: 0   
                     },
                     {
                        layer: 'schools',
                           opacity: 0   
                         },
                    {
                        layer: 'stations',
                        opacity: 0  
                        },
                        {
                            layer: 'studyzone',
                            opacity: 0  
                            },
                            {
                                layer: 'trial_flat',
                                opacity: 0  
                                }  ,
                                {
                                    layer: 'geld1',
                                    opacity: 0 
                                    }
                                    ,
                                {
                                    layer: 'geld2',
                                    opacity: 0
                                    }
                                    ,
                                {
                                    layer: 'geld3',
                                    opacity: 0 
                                    },
                                    {
                                        layer: 'trial_flat_color',
                                        opacity: 0 
                                        },
                                        {
                                            layer: 'trial_3d',
                                            opacity: 0 
                                            }
                    
            ],
            onChapterExit: [
                
                    
                    
                    
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The necessary amenities',
            
            description: 'For this study we looked primarily at four amenities that comprise a complete neighborhood. Intercity rail transit, grocery stores, elementary schools, and general practitioners (shown with their various icons on the map). These four amenities are the basis to a healthy and sustainable neighborhood. The goal of complete neighborhoods is to ensure that every resident is within 15 minutes of at least on of these amenities by 15 minute bike.',
            location: {
                center: [5.71624, 51.38566],
zoom: 10.36,
pitch: 0.00,
bearing: -0.52
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'huisarts',
                   opacity: 1},
                {
                layer: 'supermarkets',
                   opacity: 1   
                 },
                 {
                    layer: 'schools',
                       opacity: 1   
                     },
                {
                    layer: 'stations',
                    opacity: 1   
                    }
                
                
                ],
            onChapterExit: []
        },
        {
            id: 'other-identifier1',
            alignment: 'left',
            hidden: false,
            title: 'The Study Zone',
            
            description: 'We have analyzed and region east of Eindhoven that is comprised of both rural and urban areas (shown here in red). This area was chosen specifically to understand the contrast of urban and rural areas and their ‘completeness’ of their neighborhoods.',
            location: {
                center: [5.71624, 51.38566],
zoom: 10.36,
pitch: 0.00,
bearing: -0.52
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'studyzone',
                    opacity: 1
                    },
                    {
                        layer: 'trial_flat',
                        opacity: 0 
                        }  
                ],
            onChapterExit: [{
                layer: 'studyzone',
                opacity: 0
                }]
        },
        {
            id: 'other-identifier2',
            alignment: 'right',
            hidden: false,
            title: 'The Study',
            description: 'For the study we divided the study region into a grid of 500x500 m hexagons. We then made sure to look only at areas where people lived. The resulting hexagons are shown here in grey.',
            location: {
                center: [5.71624, 51.38566],
zoom: 10.36,
pitch: 0.00,
bearing: -0.52
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ {
                layer: 'trial_flat',
                opacity: 1 
                },
                {
                    layer: 'huisarts',
                       opacity: 0},
                    {
                    layer: 'supermarkets',
                       opacity: 0   
                     },
                     {
                        layer: 'schools',
                           opacity: 0   
                         },
                    {
                        layer: 'stations',
                        opacity: 0  
                        } ],
            onChapterExit: []
        },{
            id: 'other-identifier3',
            alignment: 'right',
            hidden: false,
            title: 'Gelderland Example',
            
            description: 'To complete the study we derived the centroid of each hexagon (here we see the centroid of a hexagon in Gelderland). It is from this starting point that the analysis was run to determine how many of the amenities were within a 5, 10, and 15 minute bike.',
            location: {
                center: [5.55761, 51.42366],
zoom: 16,
pitch: 0.00,
bearing: 0.09
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'trial_flat',
                opacity: .2
                },{
                    layer: 'centroid',
                    opacity: 1
                    },

                {
                    layer: 'studyzone',
                    opacity: 0 
                    },
                {
                    layer: 'huisarts',
                       opacity: 1},
                    {
                    layer: 'supermarkets',
                       opacity: 1   
                     },
                     {
                        layer: 'schools',
                           opacity: 1   
                         },
                    {
                        layer: 'stations',
                        opacity: 1  
                        }
                        
                    ],

            onChapterExit: [{
                layer: 'centroid',
                opacity: 0
                }]
        },
        {
            id: 'other-identifier4',
            alignment: 'right',
            hidden: false,
            title: 'Gelderland Example',
            
            description: 'Here we see the resulting isochrones for a 5 minute (dark blue), 10 minute (blue) and 15 minute (light blue) bike ride. The next process totaled the number of different amenities within each isochrone. For this example the results were as follows:<br><br><b>5 minute</b>: 5 schools, 4 supermarkets, 1 station, and 3 GP’s <br><b> 10 minute</b>: 9 schools, 7 supermarkets, 1 station, 6 GP’s <br><b>15 minute</b>: 11 schools, 10 supermarkets, 1 station, 6 GP’s<br><br> Clearly this example hexagon is a complete neighborhood as is surpasses the criteria of at least 1 of each of the 4 amenities within a 15 minute bike ride. In fact, it does all this within a 5 minute bike ride!',
            location: {
                center: [5.55761, 51.42366],
zoom: 12.28,
pitch: 0.00,
bearing: 0.09
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'huisarts',
                       opacity: 1},
                    {
                    layer: 'supermarkets',
                       opacity: 1   
                     },
                     {
                        layer: 'schools',
                           opacity: 1   
                         },
                    {
                        layer: 'stations',
                        opacity: 1  
                        }
                        ,
                    {
                        layer: 'geld1',
                        opacity: 1  
                        }
                        ,
                    {
                        layer: 'geld2',
                        opacity: 1  
                        }
                        ,
                    {
                        layer: 'geld3',
                        opacity: 1  
                        }
                    ],

            onChapterExit: [{
                layer: 'huisarts',
                   opacity: 0},
                {
                layer: 'supermarkets',
                   opacity: 0   
                 },
                 {
                    layer: 'schools',
                       opacity: 0   
                     },
                {
                    layer: 'stations',
                    opacity: 0  
                    }
                    ,
                {
                    layer: 'geld1',
                    opacity: 0  
                    }
                    ,
                {
                    layer: 'geld2',
                    opacity: 0  
                    }
                    ,
                {
                    layer: 'geld3',
                    opacity: 0  
                    },
                    {
                        layer: 'centroid',
                        opacity: 0  
                        }]
        },
        {
            id: 'other-identifier5',
            alignment: 'right',
            hidden: false,
            title: 'Results',
            image: 'https://i.ibb.co/drS5H2g/legend.jpg',
            description: 'The same analysis was run for the entire region on each centroid of the hexagons. The legend outlines the ‘completeness’ of each neighborhood. For this study, we were not concerned necessarily with how many of each of the amenities were accessible from each zone, but focused more on if there was at least one of each. Therefore we have separated in the legend in 100% complete (for 5 minute, 10minute and 15 minutes) and then 75%, 50%, 25% and 0% complete for 15 minute cycles.',
            location: {
                center: [5.7924, 51.38566],
zoom: 10.36,
pitch: 0.00,
bearing: -0.52
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ {
                layer: 'trial_flat_color',
                opacity: 1
                },
                {
                    layer: 'trial_3d',
                    opacity: 0
                    }],
            onChapterExit: [{
                layer: 'trial_flat_color',
                opacity: 0
                }]
        },
        {
            id: 'other-identifier6',
            alignment: 'right',
            hidden: false,
            image: 'https://i.ibb.co/drS5H2g/legend.jpg',
            description: 'In the final step of the analysis we added the population data to each hexagon , represented as height to give a better idea of what communities are most in need. Continue to scroll to look at different views of the dataset and explore the results on your own. ',
            location: {
                center: [5.7924, 51.38566],
zoom: 10.36,
pitch: 60.00,
bearing: -0.52
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ {
                layer: 'trial_3d',
                opacity: 1
                }],
            onChapterExit: []
        }
        ,
        {
            id: 'other-identifier7',
            alignment: 'right',
            hidden: false,
            image: 'https://i.ibb.co/drS5H2g/legend.jpg',
           
            location: {
                center: [5.7924, 51.38566],
zoom: 10.36,
pitch: 60.00,
bearing: 90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ {
                layer: 'trial_3d',
                opacity: 1
                }],
            onChapterExit: []
        }
        ,
        {
            id: 'other-identifier8',
            alignment: 'left',
            hidden: false,
            image: 'https://i.ibb.co/drS5H2g/legend.jpg',
          
            location: {
                center: [5.7924, 51.38566],
zoom: 10.36,
pitch: 60.00,
bearing: 180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ {
                layer: 'trial_3d',
                opacity: 1
                }],
            onChapterExit: []
        }
        ,
        {
            id: 'other-identifier9',
            alignment: 'right',
            hidden: false,
            
            image: 'https://i.ibb.co/drS5H2g/legend.jpg',
         
            location: {
                center: [5.7924, 51.38566],
zoom: 10.36,
pitch: 60.00,
bearing: 270
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ {
                layer: 'trial_3d',
                opacity: 1
                }],
            onChapterExit: []
        }
    ]
};
