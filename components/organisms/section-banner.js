import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

export const section_banner_query = gql`
  query Infogrid($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      components {
        components {
          ... on ComponentsComponentsSectionBannerLayout {
            description
            mainImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;
export const queryName = "sectionbanner";

const SectionBanner = (props) => {
  const description = props.description;
  const image = props.mainImage.node.sourceUrl;
  
  return (
    <div>
      <pre className="underline">Section Banner</pre>
      <p>{description}</p>
      <div className="w-24 h-24 ">
        <Image src={image} alt="Hero Image" width={500} height={500} className="relative"/>
      </div>
    </div>
  );
};

export default SectionBanner;