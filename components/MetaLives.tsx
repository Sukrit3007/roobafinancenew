import React from 'react';
import { AvatarGroup, Avatar } from "@nextui-org/avatar";
import CollectiblesCarousal from './ui/CollectiblesCarousal';
import { motion } from "framer-motion";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { subtitle, title } from './primitives';

const Metalives = () => {
    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    // Array of image URLs for avatars
    const avatarImages = [
        "https://s3-alpha-sig.figma.com/img/4e19/8777/91b3a067100d25b408b983b1f73c7bd3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oGbbknVtgurfLlxPZJPDoCIO1hhx2BlIUVdDbBfRmN46a3KnUOEzVN27Uqx9jSAu4F12LBkhK11oNHR6k9ilN6d7dPXyzy98GsKBgb0qZzWP3opBBMkdqJvunnR1okVAi3BihQLPzQuBJqCxNNKKS8fIBJyc7SvNjc~OGTml9Gl31x4nE4iO3vmJ0IeFiTB7XYeetR4CNiSCKYTCUwsKAVlPSVGbEeVHl4~PqBvOAVyv~A2JnUT7iLzMQJjnR~JRApWe6hr1abTvkqnvkr3HqMYkasCT9Xn3SWq72nNqvKRk~LubpuJaHHMe~dZpmpyd3qF7-ZORF4yk0oLxF77zAA__",
        "https://s3-alpha-sig.figma.com/img/36c6/4db5/7c277ee0fba8cbe9f3689274a18e8d7a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iroeekKH1gnbXuU9UeXMKJz4FxGU1-Q8Tb-hEODoBVfg48NAnnXMky~BdMRdMOtJ1tLyhMl66P0Mkyie3txbaVQwmJzgg4YzZo53fW8mYkgFArmpzLIYnDICGEay-RpJRVsTfs0DSjqG3YlN5dII7KyZXM9SVoVP2yktNlC6aIKHYF7fV8yjEDrJ3YH9IXhrogNPdilY1F4zUeI~ZPrSF0WKmpZxoDUQKHqL1t~s9o7WFJnJ~N1smWWk~nhcLG2oIaDzje~oHydrw5rIMAGW4z6mGEsBj4~3wu0dtZNaKI~tzD9hW0wcyU0nEpsRPOVnOkjUV4MUUkOt4mv~w14LPA__",
        "https://s3-alpha-sig.figma.com/img/a513/a6cb/eac00ac344058cf2cbecf291000536a2?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOCb1PA34CWak9vfU635Y2jZcZc9tclcHBIYP8s3Vv~ZRMCjdqVgdpPt6C50q5W6h-R4FEJ6BjKBkL4-K6qTucn7hWmhSSJi~~dre1FyuEdk5uB9VSkfPaoT2fiJT0bmZPOnHW0KyrmIMGe~mcHpGrWLB7r6N7fvWCOQZdu-nYRPB6W0~ZDTNuGfSRS4Mj-Rl-W3IosSTKb7l7IOcBV8wRK1n1gGi5eI5wK6e~JU4ZA0kLx2aYoEkGrEuKd1cohqZ4QSE0diDUB6EWTTsVxxy9Myvxu3~nCdzIZ~chw4lglHBbijLwbvg6YLjkxFeTrfG3H~eo4fBFdHUrD1R-86~w__",
        "https://s3-alpha-sig.figma.com/img/a513/a6cb/eac00ac344058cf2cbecf291000536a2?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOCb1PA34CWak9vfU635Y2jZcZc9tclcHBIYP8s3Vv~ZRMCjdqVgdpPt6C50q5W6h-R4FEJ6BjKBkL4-K6qTucn7hWmhSSJi~~dre1FyuEdk5uB9VSkfPaoT2fiJT0bmZPOnHW0KyrmIMGe~mcHpGrWLB7r6N7fvWCOQZdu-nYRPB6W0~ZDTNuGfSRS4Mj-Rl-W3IosSTKb7l7IOcBV8wRK1n1gGi5eI5wK6e~JU4ZA0kLx2aYoEkGrEuKd1cohqZ4QSE0diDUB6EWTTsVxxy9Myvxu3~nCdzIZ~chw4lglHBbijLwbvg6YLjkxFeTrfG3H~eo4fBFdHUrD1R-86~w__",
        "https://s3-alpha-sig.figma.com/img/36c6/4db5/7c277ee0fba8cbe9f3689274a18e8d7a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iroeekKH1gnbXuU9UeXMKJz4FxGU1-Q8Tb-hEODoBVfg48NAnnXMky~BdMRdMOtJ1tLyhMl66P0Mkyie3txbaVQwmJzgg4YzZo53fW8mYkgFArmpzLIYnDICGEay-RpJRVsTfs0DSjqG3YlN5dII7KyZXM9SVoVP2yktNlC6aIKHYF7fV8yjEDrJ3YH9IXhrogNPdilY1F4zUeI~ZPrSF0WKmpZxoDUQKHqL1t~s9o7WFJnJ~N1smWWk~nhcLG2oIaDzje~oHydrw5rIMAGW4z6mGEsBj4~3wu0dtZNaKI~tzD9hW0wcyU0nEpsRPOVnOkjUV4MUUkOt4mv~w14LPA__",
    ]

    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
            className='relative h-full w-full flex flex-col gap-4 leading-relaxed'
        >
            <Card className='max-w-96'>
                <CardBody className='flex flex-col gap-2'>
                    <motion.h1
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className={title({ size: 'md', color: 'foreground' })}
                    >
                        Meta Lives
                    </motion.h1>
                    <motion.div
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className={subtitle()}
                    >
                        <p>Live in Astrix</p>
                    </motion.div>
                    <motion.div
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className='max-w-[70%]'
                    >
                        <p className='max-w-prose'>
                            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className='w-full flex flex-row flex-wrap items-center justify-start gap-2 mt-2'
                    >
                        <AvatarGroup isBordered>
                            {avatarImages.map((imageUrl, index) => (
                                <Avatar key={index} src={imageUrl} size="sm" />
                            ))}
                        </AvatarGroup>
                        <div className={subtitle()}>
                            <p>22k people interested</p>
                        </div>
                    </motion.div>
                </CardBody>
            </Card>

            <motion.div
                className='max-w-96 '
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                <CollectiblesCarousal />
            </motion.div>
        </motion.div>
    );
};

export default Metalives;
