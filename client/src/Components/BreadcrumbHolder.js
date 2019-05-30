import React from 'react';
import { Breadcrumb } from 'semantic-ui-react'

export default class BreadcrumbHolder extends React.Component{
    render(){
        return(
            <Breadcrumb>
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right arrow' />
                <Breadcrumb.Section active>Levels</Breadcrumb.Section>
            </Breadcrumb>
        )
    }
}

/*
<Breadcrumb.Divider icon='right chevron' />
                <Breadcrumb.Section link>Registration</Breadcrumb.Section>
                */