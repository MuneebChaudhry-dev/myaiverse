'use client';
import { useState } from 'react';
import { MessageCircle, Code, Image, Video, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const tabs = [
  {
    id: 'chat',
    label: 'Chat',
    icon: MessageCircle,
    description: 'Have natural conversations and get instant answers',
  },
  {
    id: 'code',
    label: 'Code',
    icon: Code,
    description: 'Get help with coding, debugging, and development',
  },
  {
    id: 'image',
    label: 'Image',
    icon: Image,
    description: 'Generate and analyze images with AI',
  },
  {
    id: 'video',
    label: 'Video',
    icon: Video,
    description: 'Create and edit videos with AI assistance',
  },
  {
    id: 'research',
    label: 'Research',
    icon: Search,
    description: 'Research topics and get comprehensive insights',
  },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('image'); // Set image as default to match your image

  return (
    <section className='py-20 px-4'>
      <div className=' max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-col gap-12 items-center'>
          {/* Left side - Content */}
          <div>
            <h1 className='text-4xl lg:text-6xl font-bold mb-6 text-foreground'>
              Your AI Assistant
            </h1>
            <p className='text-xl text-muted-foreground mb-8'>
              Get help with coding, research, images, and more
            </p>
          </div>

          {/* Right side - Interactive Card with Tabs */}
          <Card className='max-w-4/5 w-full pt-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2'>
            <CardContent className='p-0'>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className='w-full'
              >
                {/* Tab Navigation - matches your image layout */}
                <TabsList className='w-full h-20 bg-transparent p-0 rounded-none border-b-2 flex'>
                  {tabs.map((tab, index) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                      <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className={`relative p-0 h-full w-full flex items-center justify-center bg-transparent border-r border-border last:border-r-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none`}
                      >
                        {/* Icon Circle */}
                        <div
                          className={`relative z-10 transition-all duration-100 ease-out ${
                            isActive
                              ? 'w-full  h-full bg-primary'
                              : 'w-14 h-14 bg-primary rounded-full'
                          } flex items-center justify-center ${
                            index === 0 && isActive ? 'rounded-tl-xl' : ''
                          } ${index === tabs.length - 1 && isActive ? 'rounded-tr-xl' : ''}`}
                        >
                          <Icon
                            size={24}
                            className={`transition-colors duration-300 text-primary-foreground`}
                          />
                        </div>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {/* Tab Content */}
                <div className='p-8'>
                  {tabs.map((tab) => {
                    const Icon = tab.icon;

                    return (
                      <TabsContent
                        key={tab.id}
                        value={tab.id}
                        className='h-64 flex items-center justify-center data-[state=active]:animate-[fadeInUp_0.4s_ease-out] mt-0'
                      >
                        <div className='text-center'>
                          <div className='mb-4'>
                            <Icon size={48} className='mx-auto text-primary' />
                          </div>
                          <h3 className='text-xl font-semibold mb-2'>
                            {tab.label} Assistant
                          </h3>
                          <p className='text-muted-foreground'>
                            {tab.description}
                          </p>
                        </div>
                      </TabsContent>
                    );
                  })}
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
