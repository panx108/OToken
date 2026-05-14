/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { AnimateInView } from '@/components/animate-in-view'

interface CTAProps {
  className?: string
  isAuthenticated?: boolean
}

export function CTA(props: CTAProps) {
  const { t } = useTranslation()

  if (props.isAuthenticated) {
    return null
  }

  return (
    <section className='relative z-10 overflow-hidden px-6 py-24 md:py-32'>
      <div aria-hidden className='otoken-grid absolute inset-0 -z-10 opacity-25' />
      <AnimateInView
        className='otoken-glow-card bg-background/65 mx-auto max-w-2xl rounded-2xl border border-cyan-200/10 px-8 py-12 text-center backdrop-blur-2xl'
        animation='scale-in'
      >
        <h2 className='text-2xl leading-tight font-bold tracking-tight md:text-4xl'>
          {t('Ready to run')}
          <br />
          <span className='from-primary via-cyan-200 to-emerald-300 bg-gradient-to-r bg-clip-text text-transparent'>
            {t('your OToken network?')}
          </span>
        </h2>
        <p className='text-muted-foreground/80 mx-auto mt-5 max-w-md text-sm leading-relaxed md:text-base'>
          {t(
            'Deploy your gateway, issue scoped tokens, and start routing usage through a controlled model mesh.'
          )}
        </p>
        <div className='mt-8 flex items-center justify-center gap-3'>
          <Button className='group rounded-lg bg-cyan-300 text-slate-950 hover:bg-cyan-200' render={<Link to='/sign-up' />}>
            {t('Create Token Console')}
            <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
          </Button>
          <Button
            variant='outline'
            className='border-cyan-300/25 hover:border-cyan-300/45 hover:bg-cyan-300/10 rounded-lg'
            render={<Link to='/pricing' />}
          >
            {t('View Pricing')}
          </Button>
        </div>
      </AnimateInView>
    </section>
  )
}
