import React from 'react';


export interface PrescreenerBuilderProps {
    surveyId: string;
    apollo_uri: string;
  }
  

 export const PrescreenerBuilder = (props: PrescreenerBuilderProps) => {
    // const client = new ApolloClient({
    //   uri: props.apollo_uri,
    //   cache: new InMemoryCache(),
    // });
    return (
        <button>
          FIRST TEST TEXT
          </button>
    //   <ApolloProvider client={client}>
    //     <ExtraLayerToWaitServerResponse {...props} />
    //   </ApolloProvider>
    );
  };
  export default PrescreenerBuilder;
