
import data from "../data.json";
import TextSection from "../ui/aboutme/textsection";
import Image from 'next/image';
import { Underline } from "lucide-react";
import SocialMediaLink from "../ui/aboutme/socialmedialink";

export default function AboutMe() {
	const biography = data.biography.textsections;
    const contacts = data.contacts.socialmedialink;
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Image
                src="/images/defaultprofile2.png"
                className=""
                width={400}
                height={400}
                objectFit="cover"
                alt="No Photo Provided"
                style={{
                        borderRadius:"50%",
                    }}
			/>
            <h1 style={{fontSize:45, textDecorationLine: "Underline"}}>Name Here</h1>
            <h2 style={{fontSize:20, textDecorationLine: "Underline"}}>Title</h2>
            <TextSection
                title={biography[0].title}
                text={biography[0].text}
            />
            <h1 style={{fontSize:35, textDecorationLine: "Underline"}}>Contact Me</h1>
            <div className='parent grid-parent flex flex-wrap justify-center md:justify-evenly'>
                <SocialMediaLink
                    linkTitle={contacts[0].linkTitle}
                    link={contacts[0].link}
                    src={contacts[0].src}
                />
                <SocialMediaLink
                    linkTitle={contacts[1].linkTitle}
                    link={contacts[1].link}
                    src={contacts[1].src}
                />
                <SocialMediaLink
                    linkTitle={contacts[2].linkTitle}
                    link={contacts[2].link}
                    src={contacts[2].src}
                />
                <SocialMediaLink
                    linkTitle={contacts[3].linkTitle}
                    link={contacts[3].link}
                    src={contacts[3].src}
                />
            </div>
        </main>
    );
  }