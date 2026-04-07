import React from 'react';
import { AlertCircle, LogIn, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const UserNotRegisteredError = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <Card className="max-w-md w-full shadow-lg border-red-100">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-slate-900">Access Denied</CardTitle>
          <CardDescription className="text-slate-500">
            You are not registered in the system.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <p className="text-sm text-slate-600 text-center leading-relaxed">
            It seems your account hasn't been authorized for this application yet. 
            Please contact your administrator or sign up with a registered email address.
          </p>
          <div className="bg-slate-100 p-3 rounded-lg flex items-center space-x-3">
            <Mail className="w-5 h-5 text-slate-400" />
            <span className="text-sm font-medium text-slate-700">support@wanderly.ai</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 pt-6">
          <Button 
            className="w-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center space-x-2"
            onClick={() => window.location.reload()}
          >
            <LogIn className="w-4 h-4" />
            <span>Try Logging In Again</span>
          </Button>
          <Button 
            variant="ghost" 
            className="w-full text-slate-500 hover:text-slate-700"
            onClick={() => window.location.href = '/'}
          >
            Go Back Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserNotRegisteredError;
