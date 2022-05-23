const data = {
    name: "CEO (Yogesh)",
    isExpand : true,
    item: [
        {
            name: "HR",
            isExpand: true,
            path: '/engfrontend',
            item: [
                {
                    name: 'Recruitment Team',
                    isExpand : true,
                    item : [
                        {
                            name: "Team Leader",
                            isExpand : true,
                            path: '/hr',
                            item:[
                                {
                                    name: 'Team member',
                                    isExpand: false,
                                    path: '/hr'
                                }
                            ]
                        }
                    ]
                }
               
            ]
        },
        {
            name: "Engineering",
            isExpand: true,
            item: [
                {
                    name: 'Frontend Team',
                    isExpand : true,
                    path: '/engfrontend',
                    item : [
                        {
                            name: "Team Leader",
                            isExpand : true,
                            path: '/engfrontend',
                            item:[
                                {
                                    name: 'Team member',
                                    isExpand: false,
                                    path: '/engfrontend',
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Backend Team',
                    isExpand : true,
                    item : [
                        {
                            name: "Team Leader",
                            isExpand : true,
                            item:[
                                {
                                    name: 'Team member',
                                    isExpand: false,
                                    path: '/engbackend'
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            name: "Design",
            isExpand: true,
            item: [
                {
                    name: 'Design Team',
                    isExpand : true,
                    item : [
                        {
                            name: "Team Leader",
                            isExpand : true,
                            path: '/design',
                            item:[
                                {
                                    name: 'Team member',
                                    isExpand: false,
                                    path: '/design'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ]
}

export default data