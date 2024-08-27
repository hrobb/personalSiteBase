
import data from "../data.json";
import TextSection from "../ui/textsection";
import Image from 'next/image';
import { Underline } from "lucide-react";

export default function AboutMe() {
	const cards = data.aboutme.textsections;
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
                title={cards[0].title}
                text={cards[0].text}
            />
        </main>
    );
  }