import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const sidebar = ({ children }) =>  (
    <StaticQuery
       query={graphql`
         query SlidebarItemsQuery {
            allJson {
                edges {
                  node {
                    label
                    link
                  }
                }
            }
         }
       `}
       render={data => (
        <>
          <ul>{getSidebarLabel(data)}</ul>
        </>
       )}
       />
);

function getSidebarLabel (data){
    const allSidebarItemsArray = [];
    data.allSidebarItemsJson.edges.forrEach(item =>
        allSidebarItemsArray.push(<li key={item.node.label}>{item.node.label}</li>)
        );
        return allSidebarItemsArray;
}

