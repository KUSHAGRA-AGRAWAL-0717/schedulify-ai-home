
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PageNavigationProps {
  prevPage?: {
    path: string;
    label: string;
  };
  nextPage?: {
    path: string;
    label: string;
  };
}

const PageNavigation = ({ prevPage, nextPage }: PageNavigationProps) => {
  return (
    <div className="container mx-auto my-12 px-4 flex justify-between">
      {prevPage ? (
        <Button variant="outline" asChild>
          <Link to={prevPage.path} className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            {prevPage.label}
          </Link>
        </Button>
      ) : (
        <div />
      )}
      
      {nextPage ? (
        <Button variant="outline" asChild>
          <Link to={nextPage.path} className="flex items-center">
            {nextPage.label}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default PageNavigation;
